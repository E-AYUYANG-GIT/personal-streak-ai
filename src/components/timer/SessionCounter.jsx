import useTimerStore from "../../store/timerStore";

/* ── Animated flip-dot indicator ── */
function SessionDot({ filled, index }) {
  return (
    <span
      className={`sc-dot${filled ? " sc-dot--filled" : ""}`}
      style={{ animationDelay: `${index * 60}ms` }}
      aria-hidden="true"
    />
  );
}

export default function SessionCounter() {
  const sessionsCompleted = useTimerStore((s) => s.sessionsCompleted);
  const targetSessions    = useTimerStore((s) => s.targetSessions);

  const encouragement =
    sessionsCompleted === 0
      ? "Let's get started! 🚀"
      : sessionsCompleted < targetSessions
      ? "Keep going! You're doing great! 💪"
      : "All sessions done! Amazing work! 🎉";

  return (
    <div className="card sc-card">
      <h3 className="tp-card-title">Session Counter</h3>

      {/* Big numeric display */}
      <div className="sc-numeric">
        <span className="sc-current">{sessionsCompleted}</span>
        <span className="sc-sep">/</span>
        <span className="sc-total">{targetSessions}</span>
      </div>

      {/* Flip-dot row */}
      <div className="sc-dots" role="group" aria-label={`${sessionsCompleted} of ${targetSessions} sessions completed`}>
        {Array.from({ length: targetSessions }).map((_, i) => (
          <SessionDot key={i} filled={i < sessionsCompleted} index={i} />
        ))}
      </div>

      <p className="sc-sub">Sessions Completed Today</p>
      <p className="tp-progress-msg">{encouragement}</p>
    </div>
  );
}