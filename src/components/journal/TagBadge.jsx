// Pill badge for journal tags (Learning, Coding, Personal)
export default function TagBadge({ label, color }) {
  return <span style={{ background: color }}>{label}</span>;
}