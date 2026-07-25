import CircularProgress from "./CircularProgress";

export default function ProgressPanel({ completed, total }) {
  const progress = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="card tp-progress-card">
      <h3 className="tp-card-title">Today&apos;s Progress</h3>
      <div className="tp-progress-center">
        <CircularProgress value={progress} />
      </div>
      <p className="tp-progress-sub">
        {completed} / {total} tasks completed
      </p>
      <div className="tp-progress-bar-track">
        <div className="tp-progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <p className="tp-progress-msg">Keep going! You&apos;re doing great! 💪</p>
    </div>
  );
}