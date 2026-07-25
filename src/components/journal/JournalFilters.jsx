import { List, CalendarDays, Star, Archive } from "lucide-react";

const FILTERS = [
  { key: "all",       label: "All Entries", icon: List },
  { key: "today",     label: "Today",       icon: CalendarDays },
  { key: "favorites", label: "Favorites",   icon: Star },
  { key: "archived",  label: "Archived",    icon: Archive },
];

export default function JournalFilters({ active, onChange }) {
  return (
    <div className="jp-filters">
      {FILTERS.map((f) => {
        const Icon = f.icon;
        return (
          <button
            key={f.key}
            className={`jp-filter-pill ${active === f.key ? "jp-filter-active" : ""}`}
            onClick={() => onChange(f.key)}
          >
            <Icon size={14} />
            <span>{f.label}</span>
          </button>
        );
      })}
    </div>
  );
}