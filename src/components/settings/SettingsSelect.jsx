import { ChevronDown } from "lucide-react";

export default function SettingsSelect({ value, options, onChange }) {
  return (
    <div className="st-select-wrap">
      <select
        className="st-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown size={14} color="var(--text-muted)" className="st-select-arrow" />
    </div>
  );
}