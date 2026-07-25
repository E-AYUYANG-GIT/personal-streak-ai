import { CheckCircle2, Flame, Smile, Clock } from "lucide-react";

const SUMMARY_ITEMS = [
  { key: "tasksCompleted", label: "Tasks Completed", icon: CheckCircle2, color: "#22C55E", bg: "#DCFCE7", value: "5" },
  { key: "dayStreak",      label: "Day Streak",      icon: Flame,       color: "#F59E0B", bg: "#FEF3C7", value: "30" },
  { key: "mood",           label: "Mood",            icon: Smile,       color: "#8B5E3C", bg: "#F5F0EB", value: "Great" },
  { key: "focusTime",      label: "Focus Time",      icon: Clock,       color: "#3B82F6", bg: "#DBEAFE", value: "2h 15m" },
];

export default function TodaySummary() {
  return (
    <div className="jp-summary-card">
      <h3 className="jp-card-title">Today&apos;s Summary</h3>
      <div className="jp-summary-grid">
        {SUMMARY_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.key} className="jp-summary-item">
              <div
                className="jp-summary-icon"
                style={{ background: item.bg, color: item.color }}
              >
                <Icon size={20} />
              </div>
              <div className="jp-summary-info">
                <span className="jp-summary-value">{item.value}</span>
                <span className="jp-summary-label">{item.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}