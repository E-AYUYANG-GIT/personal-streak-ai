import { CheckCircle2 } from "lucide-react";
import { WEEK_DAYS, WEEK_STATUS } from "../../lib/constants";

export default function WeekCalendar() {
  return (
    <div className="card">
      <p className="section-label">This Week</p>
      <div className="week-row">
        {WEEK_DAYS.map((d, i) => (
          <div key={i} className="day-col">
            <span className="day-lbl">{d}</span>
            {WEEK_STATUS[i] === "done"   && <div className="day-done"><CheckCircle2 size={16} color="#fff" /></div>}
            {WEEK_STATUS[i] === "active" && <div className="day-active" />}
            {WEEK_STATUS[i] === "empty"  && <div className="day-empty" />}
          </div>
        ))}
      </div>
    </div>
  );
}