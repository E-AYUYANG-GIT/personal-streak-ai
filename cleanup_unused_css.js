/* cleanup_unused_css.js
 * Removes CSS rules from App.css whose class selectors are never used in JSX/JS.
 * Preserves:
 *  - @import / @charset
 *  - @keyframes (and inner from/to/%)
 *  - @media wrapper (recurses into inner rules)
 *  - Rules with no class selector (element, pseudo-element, id, etc.)
 *  - Rules where >=1 class is actually used in source
 */
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

const root = process.cwd();
const srcDir = path.join(root, 'src');

// --- 1. Collect .js/.jsx files ---
function walk(dir, acc = []) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p, acc);
    else if (f.isFile() && /\.(js|jsx)$/.test(f.name)) acc.push(p);
  }
  return acc;
}
const files = walk(srcDir);

// --- 2. Extract class tokens from className="..." and className={`...`} ---
const CLASS_TOKEN = /[a-zA-Z][a-zA-Z0-9_-]*/g;
const SKIP_PREFIX = /^(!|w-|h-|bg-|border-|max-|^min-|^pg-|^flex-|^grid-|^p-|^m-|^gap-|^text-|^rounded-|^overflow-|^items-|^justify-|^self-|^col-|^row-|^aspect-|^object-|^outline-|^ring-|^select-|^duration-|^ease-|^animate-|^decoration-|^list-|^whitespace-|^break-|^align-|^appearance-|^bg-)/;

const used = new Set();
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');

  // static className="..."
  for (const m of content.matchAll(/className="([^"]*)"/g)) {
    for (const tok of m[1].match(CLASS_TOKEN) || []) {
      if (!SKIP_PREFIX.test(tok)) used.add(tok);
    }
  }
  // template literal className={`...`}
  for (const m of content.matchAll(/className={`([^`]*)`}/g)) {
    const cleaned = m[1].replace(/\$\{[^}]*\}/g, ' ');
    for (const tok of cleaned.match(CLASS_TOKEN) || []) {
      if (!tok) continue;
      if (!SKIP_PREFIX.test(tok)) used.add(tok);
    }
  }
  // className={cond ? "x" : "y"}  / clsx("a","b")  / conditional strings
  for (const m of content.matchAll(/className=\{[^}]*\}/g)) {
    const expr = m[0].slice('className={'.length, -1);
    for (const q of expr.matchAll(/(["'`])([^"'`]*)\1/g)) {
      for (const tok of q[2].match(CLASS_TOKEN) || []) {
        if (!tok) continue;
        if (!SKIP_PREFIX.test(tok)) used.add(tok);
      }
    }
  }
  // bare string arguments that look like className in JSX props across file
  // (e.g. clsx("tp-filter-active", ...)) - capture quoted strings only if token looks like a class
  // Already handled by above for className scope.
}

// --- 3. Defined classes in App.css ---
const cssPath = path.join(srcDir, 'App.css');
let css = fs.readFileSync(cssPath, 'utf8');

const defined = new Set();
for (const m of css.matchAll(/\.([a-zA-Z][\w-]*)/g)) {
  const name = m[1];
  if (['com', 'css', 'googleapis', 'min', 'max'].includes(name)) continue;
  defined.add(name);
}

const unused = new Set([...defined].filter((c) => !used.has(c)));

console.log('--- Analysis ---');
console.log('Source files scanned :', files.length);
console.log('Defined classes      :', defined.size);
console.log('Used classes         :', used.size);
console.log('Unused classes       :', unused.size);
console.log('');
console.log('Unused class list:');
console.log([...unused].sort().join(', '));
console.log('\n');

// --- 4. Helper: does a selector use only unused classes? ---
const selectorIsDead = (selector) => {
  const tokens = selector.match(/\.[a-zA-Z][\w-]*/g) || [];
  if (tokens.length === 0) return false; // no class -> keep
  return tokens.every((t) => unused.has(t.slice(1)));
};

// --- 5. Parse + filter with postcss ---
const rootNode = postcss.parse(css);
let removed = 0;
let rewritten = 0;

const walkRules = (node) => {
  node.walkRules((rule) => {
    // skip rules inside @keyframes (from/to/% are not selectors we care about)
    if (rule.parent && rule.parent.name === 'keyframes') return;

    const keptSelectors = rule.selectors
      .map((s) => s.trim())
      .filter((s) => !selectorIsDead(s));

    if (keptSelectors.length === 0) {
      rule.remove();
      removed++;
    } else if (keptSelectors.length !== rule.selectors.length) {
      rule.selectors = keptSelectors;
      rewritten++;
    }
    // Remove any now-empty rule
    if (rule.nodes && rule.nodes.length === 0) {
      rule.remove();
      removed++;
    }
  });
};
walkRules(rootNode);

// Clean up extra blank lines
const cleaned = rootNode.toString();
const tidy = cleaned.replace(/\n{3,}/g, '\n\n\n');

fs.writeFileSync(cssPath, tidy, 'utf8');
console.log('--- Results ---');
console.log('Rules removed  :', removed);
console.log('Rules rewritten:', rewritten);
console.log('Original bytes:', css.length);
console.log('Cleaned bytes :', tidy.length);
