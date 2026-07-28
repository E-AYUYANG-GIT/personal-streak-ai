export default function ProgressCard({ completed, total }) {
  const pct = total ? Math.round((completed / total) * 100) : 0;
  const C = 2 * Math.PI * 40;
  const dashOffset = C - (pct / 100) * C;

  return (
    <div className="progress-card">
      <div className="progress-top">
        <div>
          <p className="progress-eyebrow">Today's Progress</p>
          <p className="progress-heading">
            You've completed <span className="gold">{completed}</span> of{" "}
            <span className="gold">{total}</span> tasks today.
          </p>
        </div>
        <svg width="84" height="84" viewBox="0 0 100 100" style={{ flexShrink: 0 }}>
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#FECF6E" strokeWidth="8" strokeLinecap="round" 
                  strokeDasharray={C} strokeDashoffset={dashOffset} transform="rotate(-90 50 50)" 
                  style={{ transition: "stroke-dashoffset 0.8s ease-in-out", }}/>
          <text x="50" y="56" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" style={{ transition: "all .4s ease", }}>            {pct}%
          </text>
        </svg>
      </div>
      <div className="pill-row">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className={`pill ${i < completed ? "pill-done" : "pill-empty"}`} style={{ transitionDelay: `${i * 70}ms`, }}
/>
        ))}
      </div>
    </div>
  );
}