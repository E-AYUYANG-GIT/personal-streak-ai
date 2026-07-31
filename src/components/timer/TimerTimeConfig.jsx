import { useState } from "react";
import useTimerStore from "../../store/timerStore";

export default function TimerTimeConfig() {
  const focusDuration = useTimerStore((s) => s.focusDuration);
  const setFocusDuration = useTimerStore((s) => s.setFocusDuration);

  const [minutes, setMinutes] = useState(Math.floor(focusDuration / 60));
  const [seconds, setSeconds] = useState(focusDuration % 60);

  const handleSave = () => {
    const totalSeconds = minutes * 60 + seconds;
    setFocusDuration(totalSeconds);
  };

  return (
    <div className="ttc-root">
      <div className="ttc-field">
        <label className="ttc-label" htmlFor="focus-minutes">Minutes</label>
        <input
          id="focus-minutes"
          type="number"
          min="0"
          max="240"
          value={minutes}
          onChange={(e) => setMinutes(Math.max(0, parseInt(e.target.value) || 0))}
          className="ttc-input"
        />
      </div>

      <div className="ttc-field">
        <label className="ttc-label" htmlFor="focus-seconds">Seconds</label>
        <input
          id="focus-seconds"
          type="number"
          min="0"
          max="59"
          value={seconds}
          onChange={(e) => setSeconds(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))}
          className="ttc-input"
        />
      </div>

      <button className="ttc-btn" onClick={handleSave}>
        Set Focus Time
      </button>
    </div>
  );
}
