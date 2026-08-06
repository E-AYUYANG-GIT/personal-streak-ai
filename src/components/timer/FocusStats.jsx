import useTimerStore from "../../store/timerStore";

export default function FocusStats() {
  const minutesFocused = useTimerStore((s) => s.minutesFocused);

  return (
    <>
      {/* ── Focus Stats ── */}
      <div className="card">
        <h3 className="tp-card-title">Focus Stats</h3>
        <div className="fs-row">
          <span className="fs-clock-icon" aria-hidden="true">🕐</span>
          <div>
            <span className="fs-minutes">{minutesFocused}</span>
            <span className="fs-unit">Minutes Focused</span>
            <span className="fs-unit">Today</span>
          </div>
        </div>
      </div>

      {/* ── Calm Environment ── */}
      <div className="card">
        <h3 className="tp-card-title">Calm Environment</h3>
        <div className="fs-row">
          <span className="fs-plant-icon" aria-hidden="true">🪴</span>
          <p className="fs-calm-text">
            Find a quiet place, breathe, and focus on one thing at a time.
          </p>
        </div>
      </div>
    </>
  );
}