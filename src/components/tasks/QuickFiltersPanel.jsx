import { Clock, Flag, Flame, BellOff } from "lucide-react";

const QUICK_FILTERS = [
  { icon: Clock,   label: "Due Today",    count: 4 },
  { icon: Flag,    label: "High Priority",  count: 1 },
  { icon: Flame,   label: "Daily Habits",   count: 2 },
  { icon: BellOff, label: "No Reminder",    count: 1 },
];

export default function QuickFiltersPanel() {
  return (
    <div className="card tp-quick-filters">
      <h3 className="tp-card-title">Quick Filters</h3>
      {QUICK_FILTERS.map((qf) => {
        const Icon = qf.icon;
        return (
          <div key={qf.label} className="tp-qf-row">
            <div className="tp-qf-left">
              <Icon size={14} color="#8B5E3C" />
              <span>{qf.label}</span>
            </div>
            <span className="tp-qf-count">{qf.count}</span>
          </div>
        );
      })}
    </div>
  );
}