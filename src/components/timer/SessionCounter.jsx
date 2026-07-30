// src/components/timer/SessionCounter.jsx
import useTimerStore from "../../store/timerStore";

function FlipNum({ value }) {
  return (
    <div className="sc-flipnum">
      <span>{String(value).padStart(2, "0")}</span>
    </div>
  );
}

export default function SessionCounter() {
  const sessionsCompleted = useTimerStore((s) => s.sessionsCompleted);
  const targetSessions    = useTimerStore((s) => s.targetSessions);

  return (
    <div className="card sc-card">
      <h3 className="tp-card-title">Session Counter</h3>

      {/* Flip-card style numeric display */}
      <div className="sc-display">
        <FlipNum value={sessionsCompleted} />
        <span className="sc-slash">/</span>
        <FlipNum value={targetSessions} />
      </div>

      {/* Dot indicators */}
      <div className="sc-dots">
        {Array.from({ length: targetSessions }).map((_, i) => (
          <span
            key={i}
            className={`sc-dot ${i < sessionsCompleted ? "sc-dot--done" : ""}`}
          />
        ))}
      </div>

      <p className="sc-label">Sessions Completed Today</p>
    </div>
  );
}