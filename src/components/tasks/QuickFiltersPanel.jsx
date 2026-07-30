import { Clock, Flag, Flame, BellOff } from "lucide-react";
import { PRIORITY_STYLES } from "../../lib/constants";
import useTasksStore from "../../store/tasksStore";

export default function QuickFiltersPanel({ activeFilter, onSelectFilter }) {
  const { tasks = [] } = useTasksStore();

  // Get current local date (YYYY-MM-DD) for precise date matching
  const todayStr = new Date().toISOString().split("T")[0];

  const quickFilters = [
    {
      id: "highPriority",
      icon: Flag,
      label: "High Priority",
      // Strictly matches 'High' priority key defined in PRIORITY_STYLES
      count: tasks.filter(
        (t) => !t.completed && t.priority === Object.keys(PRIORITY_STYLES).find(p => p === "High")
      ).length,
    },
    {
      id: "dailyHabits",
      icon: Flame,
      label: "Daily Habits",
      // Matches tasks with an active streak counter
      count: tasks.filter((t) => !t.completed && Boolean(t.streak)).length,
    },
    {
      id: "noReminder",
      icon: BellOff,
      label: "No Reminder",
      // Matches tasks where notifications/reminders are turned off
      count: tasks.filter((t) => !t.completed && !t.reminder).length,
    },
  ];

  return (
    <div className="card tp-quick-filters">
      <h3 className="tp-card-title">Quick Filters</h3>
      {quickFilters.map((qf) => {
        const Icon = qf.icon;
        const isActive = activeFilter === qf.id;

        return (
          <div
            key={qf.id}
            className={`tp-qf-row ${isActive ? "active" : ""}`}
            onClick={() => onSelectFilter?.(isActive ? null : qf.id)}
            style={{ cursor: "pointer" }}
          >
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