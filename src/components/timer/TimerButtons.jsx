import useTimerStore from "../../store/timerStore";

export default function TimerButtons() {
  const isRunning = useTimerStore((s) => s.isRunning);
  const start     = useTimerStore((s) => s.start);
  const pause     = useTimerStore((s) => s.pause);
  const reset     = useTimerStore((s) => s.reset);
  const skip      = useTimerStore((s) => s.skip);

  return (
    <div className="tbtn-root">

      {/* ── Skip — ghost card (replaces redundant Pause) ── */}
      <button
        className="tbtn--ghost"
        onClick={skip}
        aria-label="Skip session"
        title="Skip to next session"
      >
        <span className="tbtn-icon--skip" aria-hidden="true">⏭</span>
        <span className="tbtn-label">Skip</span>
      </button>

      {/* ── Start / Pause — primary circle ── */}
      <button
        className="tbtn--primary"
        onClick={isRunning ? pause : start}
        aria-label={isRunning ? "Pause timer" : "Start timer"}
      >
        {isRunning ? (
          <div className="tbtn-play-bars" aria-hidden="true">
            <span /><span />
          </div>
        ) : (
          <span className="tbtn-play-tri" aria-hidden="true">▶</span>
        )}
        <span className="tbtn-label">{isRunning ? "Pause" : "Start"}</span>
      </button>

      {/* ── Reset — ghost card ── */}
      <button
        className="tbtn--ghost"
        onClick={reset}
        aria-label="Reset timer"
      >
        <span className="tbtn-icon--reset" aria-hidden="true">↺</span>
        <span className="tbtn-label">Reset</span>
      </button>

    </div>
  );
}