import { Lightbulb } from "lucide-react";

export default function DailyReminder() {
  return (
    <div className="jp-reminder-card">
      <div className="jp-reminder-content">
        <div className="jp-reminder-header">
          <Lightbulb size={18} color="#F59E0B" />
          <h3 className="jp-reminder-title">Daily Reminder</h3>
        </div>
        <p className="jp-reminder-text">
          Taking a few minutes to reflect each day helps you grow consistently.
        </p>
      </div>
      <div className="jp-reminder-plant">🌿</div>
    </div>
  );
}