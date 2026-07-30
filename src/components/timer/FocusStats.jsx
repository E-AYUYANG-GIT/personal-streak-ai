// src/components/timer/FocusStats.jsx
import { Clock } from "lucide-react";
import useTimerStore from "../../store/timerStore";

export default function FocusStats() {
  const minutesFocused = useTimerStore((s) => s.minutesFocused);

  return (
    <div className="card fs-card">
      <h3 className="tp-card-title">Focus Stats</h3>
      <div className="fs-row">
        <div className="fs-icon-wrap">
          <Clock size={22} color="#C07A4A" />
        </div>
        <div>
          <p className="fs-minutes">{minutesFocused}</p>
          <p className="fs-sublabel">Minutes Focused Today</p>
        </div>
      </div>
    </div>
  );
}