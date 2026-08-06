// src/components/timer/TimerBreakSection.jsx
import useTimerStore from "../../store/timerStore";

export default function TimerBreakSection() {
  const mode             = useTimerStore((s) => s.mode);
  const selectedBreak    = useTimerStore((s) => s.selectedBreak);
  const setFocusMode     = useTimerStore((s) => s.setFocusMode);
  const setSelectedBreak = useTimerStore((s) => s.setSelectedBreak);

  const isFocusMode = mode === "focus";

  return (
    <div className="tbs-wrapper">
      {/* ── Inner row that FORCES both pills side by side ── */}
      <div className="tbs-row">

        {/* Pill 1: ([ Focus ]) */}
        <div className="tbs-root tbs-focus-pill">
          <button
            role="tab"
            aria-selected={isFocusMode}
            className={`tbs-tab ${isFocusMode ? "tbs-tab--active" : ""}`}
            onClick={setFocusMode}
          >
            <span className="tbs-icon" aria-hidden="true">☀️</span>
            <span>Focus</span>
          </button>
        </div>

        {/* Pill 2: ([ Short ][ Long ]) */}
        <div className="tbs-root tbs-toggle-pill" role="tablist" aria-label="Break Selection">
          <button
            role="tab"
            aria-selected={selectedBreak === "shortBreak"}
            className={`tbs-tab ${selectedBreak === "shortBreak" ? "tbs-tab--active" : ""}`}
            onClick={() => setSelectedBreak("shortBreak")}
          >
            <span className="tbs-icon" aria-hidden="true">☕</span>
            <span>Short</span>
          </button>
          <button
            role="tab"
            aria-selected={selectedBreak === "longBreak"}
            className={`tbs-tab ${selectedBreak === "longBreak" ? "tbs-tab--active" : ""}`}
            onClick={() => setSelectedBreak("longBreak")}
          >
            <span className="tbs-icon" aria-hidden="true">🍃</span>
            <span>Long</span>
          </button>
        </div>

      </div>
    </div>
  );
}