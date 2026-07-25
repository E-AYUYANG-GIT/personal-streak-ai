const FILTERS = [
  { key: "all",       label: "All"       },
  { key: "today",     label: "Today"     },
  { key: "upcoming",  label: "Upcoming"  },
  { key: "completed", label: "Completed" },
];

export default function TaskFilters({ active, onChange }) {
  return (
    <div className="tp-filters">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          className={`tp-filter-pill ${active === f.key ? "tp-filter-active" : ""}`}
          onClick={() => onChange(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}