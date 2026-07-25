# Scaffold: Personal Streak AI — Missing Files & Folders

We are building a Tauri 2 + React 19 + Tailwind CSS 4 desktop app.
The `src/` folder already has some files. Your job is to create **only the missing files and folders** listed below. Do not touch or overwrite anything that already exists.

---

## What already exists

```
src/
├── main.jsx
├── App.jsx
├── app.css
├── lib/
│   └── constants.js
├── store/
│   ├── tasksStore.js
│   └── uiStore.js
├── components/
│   ├── layout/
│   │   ├── WindowBar.jsx
│   │   └── BottomNav.jsx
│   └── home/
│       ├── AvatarCard.jsx
│       ├── MoodCheck.jsx
│       ├── FocusCard.jsx
│       ├── ProgressCard.jsx
│       ├── TaskList.jsx
│       ├── JournalWidget.jsx
│       ├── StreakCard.jsx
│       ├── WeekCalendar.jsx
│       └── AICoachPanel.jsx
└── pages/
    ├── HomePage.jsx
    ├── JournalPage.jsx
    ├── TasksPage.jsx
    ├── ProgressPage.jsx
    └── SettingsPage.jsx
```

---

## What you must create (ALL of these are missing)

Create each file with a minimal placeholder — just enough to be a valid, importable React component or JS module. No full implementation needed yet.

### 1. New Zustand stores

```
src/store/journalStore.js
src/store/streakStore.js
```

**`journalStore.js`** — placeholder Zustand store:
```js
import { create } from "zustand";

const useJournalStore = create((set) => ({
  entries: [],
  draft: { text: "", mood: null, tags: [] },
  setDraft: (draft) => set({ draft }),
  addEntry: (entry) =>
    set((state) => ({ entries: [{ ...entry, id: Date.now() }, ...state.entries] })),
}));

export default useJournalStore;
```

**`streakStore.js`** — placeholder Zustand store:
```js
import { create } from "zustand";

const useStreakStore = create((set) => ({
  currentStreak: 30,
  bestStreak: 42,
  weekStatus: ["done", "done", "done", "done", "active", "empty", "empty"],
  setStreak: (data) => set(data),
}));

export default useStreakStore;
```

---

### 2. New custom hooks

```
src/hooks/useDatabase.js
src/hooks/useNotification.js
src/hooks/useTauri.js
```

**`useDatabase.js`**:
```js
// Wraps @tauri-apps/plugin-sql
// Usage: const { query, execute } = useDatabase();
export function useDatabase() {
  const query  = async (sql, params = []) => { /* TODO */ };
  const execute = async (sql, params = []) => { /* TODO */ };
  return { query, execute };
}
```

**`useNotification.js`**:
```js
// Wraps @tauri-apps/plugin-notification
// Usage: const { notify } = useNotification();
export function useNotification() {
  const notify = async (title, body) => { /* TODO */ };
  return { notify };
}
```

**`useTauri.js`**:
```js
// Wraps Tauri invoke() for custom Rust commands
// Usage: const { invoke } = useTauri();
export function useTauri() {
  const invoke = async (command, args = {}) => { /* TODO */ };
  return { invoke };
}
```

---

### 3. New lib utilities

```
src/lib/dateUtils.js
src/lib/db.js
```

**`dateUtils.js`**:
```js
// Date formatting helpers for journal entries and week calendar

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
}

export function formatShortDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric",
  });
}

export function getRelativeDate(date) {
  const today = new Date();
  const d     = new Date(date);
  const diff  = Math.floor((today - d) / 86400000);
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  return formatShortDate(date);
}
```

**`db.js`**:
```js
// Raw SQL schema and query strings
// Used by useDatabase hook — no React imports here

export const SCHEMA = `
  CREATE TABLE IF NOT EXISTS tasks (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    title     TEXT NOT NULL,
    subtitle  TEXT,
    time      TEXT,
    icon_bg   TEXT,
    completed INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS journal_entries (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    text       TEXT,
    mood       INTEGER,
    tags       TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS streak (
    id             INTEGER PRIMARY KEY,
    current_streak INTEGER DEFAULT 0,
    best_streak    INTEGER DEFAULT 0,
    last_completed TEXT
  );
`;

export const QUERIES = {
  getAllTasks:      "SELECT * FROM tasks ORDER BY time ASC",
  getJournalEntries: "SELECT * FROM journal_entries ORDER BY created_at DESC",
  getStreak:       "SELECT * FROM streak WHERE id = 1",
};
```

---

### 4. New journal components folder and files

```
src/components/journal/JournalEntry.jsx
src/components/journal/MoodPicker.jsx
src/components/journal/EntryCard.jsx
src/components/journal/TagBadge.jsx
src/components/journal/AIReflectionPanel.jsx
src/components/journal/MoodTrend.jsx
```

Each file should export a **minimal placeholder component** like this pattern:

**`JournalEntry.jsx`**:
```jsx
// Main journal editor card — text area, mood, tags, save button
export default function JournalEntry() {
  return <div className="card">JournalEntry — TODO</div>;
}
```

**`MoodPicker.jsx`**:
```jsx
// Mood avatar selector (5 face options). Reusable in JournalEntry and HomePage.
export default function MoodPicker({ selected, onSelect }) {
  return <div>MoodPicker — TODO</div>;
}
```

**`EntryCard.jsx`**:
```jsx
// "Previous Entries" list row — date, mood dot, preview, tag, star, chevron
export default function EntryCard({ entry }) {
  return <div className="card">EntryCard — TODO</div>;
}
```

**`TagBadge.jsx`**:
```jsx
// Pill badge for journal tags (Learning, Coding, Personal)
export default function TagBadge({ label, color }) {
  return <span style={{ background: color }}>{label}</span>;
}
```

**`AIReflectionPanel.jsx`**:
```jsx
// Right column AI panel — Inspire Me, Expand My Thoughts, Summarize Today
export default function AIReflectionPanel() {
  return <div className="ai-card">AIReflectionPanel — TODO</div>;
}
```

**`MoodTrend.jsx`**:
```jsx
// Right column "Your Recent Mood" — 7-day emoji row with day labels
export default function MoodTrend() {
  return <div className="card">MoodTrend — TODO</div>;
}
```

---

### 5. New shared UI primitives folder and files

```
src/components/ui/Button.jsx
src/components/ui/Checkbox.jsx
```

**`Button.jsx`**:
```jsx
// Reusable button — variants: "primary" | "outline" | "ghost"
export default function Button({ children, variant = "primary", onClick, ...props }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
```

**`Checkbox.jsx`**:
```jsx
// Styled checkbox used in TaskList and journal tag selection
export default function Checkbox({ checked, onChange, label }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
```

---

## Final expected structure after your changes

```
src/
├── main.jsx                          ← untouched
├── App.jsx                           ← untouched
├── app.css                           ← untouched
│
├── pages/
│   ├── HomePage.jsx                  ← untouched
│   ├── JournalPage.jsx               ← untouched
│   ├── TasksPage.jsx                 ← untouched
│   ├── ProgressPage.jsx              ← untouched
│   └── SettingsPage.jsx              ← untouched
│
├── components/
│   ├── layout/
│   │   ├── WindowBar.jsx             ← untouched
│   │   └── BottomNav.jsx             ← untouched
│   ├── home/
│   │   ├── AvatarCard.jsx            ← untouched
│   │   ├── MoodCheck.jsx             ← untouched
│   │   ├── FocusCard.jsx             ← untouched
│   │   ├── ProgressCard.jsx          ← untouched
│   │   ├── TaskList.jsx              ← untouched
│   │   ├── JournalWidget.jsx         ← untouched
│   │   ├── StreakCard.jsx            ← untouched
│   │   ├── WeekCalendar.jsx          ← untouched
│   │   └── AICoachPanel.jsx          ← untouched
│   ├── journal/                      ← CREATE THIS FOLDER
│   │   ├── JournalEntry.jsx          ← CREATE
│   │   ├── MoodPicker.jsx            ← CREATE
│   │   ├── EntryCard.jsx             ← CREATE
│   │   ├── TagBadge.jsx              ← CREATE
│   │   ├── AIReflectionPanel.jsx     ← CREATE
│   │   └── MoodTrend.jsx             ← CREATE
│   └── ui/                           ← CREATE THIS FOLDER
│       ├── Button.jsx                ← CREATE
│       └── Checkbox.jsx              ← CREATE
│
├── store/
│   ├── tasksStore.js                 ← untouched
│   ├── uiStore.js                    ← untouched
│   ├── journalStore.js               ← CREATE
│   └── streakStore.js                ← CREATE
│
├── hooks/                            ← CREATE THIS FOLDER
│   ├── useDatabase.js                ← CREATE
│   ├── useNotification.js            ← CREATE
│   └── useTauri.js                   ← CREATE
│
└── lib/
    ├── constants.js                  ← untouched
    ├── dateUtils.js                  ← CREATE
    └── db.js                         ← CREATE
```

---

## Instructions

1. Create every file marked **← CREATE** with the exact placeholder content shown above.
2. Create any missing folders automatically as needed.
3. Do **not** modify any file marked **← untouched**.
4. After creating all files, run `find src/ -type f | sort` and print the result so I can verify everything is in place.
