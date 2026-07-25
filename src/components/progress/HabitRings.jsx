import { MoreHorizontal } from "lucide-react";
import { HABITS } from "../../lib/constants";

function Ring({ pct, color, trackColor, Icon, label }) {
    const R = 36;
    const C = 2 * Math.PI * R;
    const dashOffset = C - (pct / 100) * C;

    return (
        <div className="pg-ring-item">
            <div className="pg-ring-svg-wrap">
                <svg width="88" height="88" viewBox="0 0 88 88">
                    {/* Track */}
                    <circle cx="44" cy="44" r={R} fill="none" stroke={trackColor} strokeWidth="7" />
                    {/* Progress */}
                    <circle
                        cx="44" cy="44" r={R}
                        fill="none"
                        stroke={color}
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeDasharray={C}
                        strokeDashoffset={dashOffset}
                        transform="rotate(-90 44 44)"
                    />
                </svg>
                {/* Icon in center */}
                <div className="pg-ring-icon" style={{ color }}>
                    <Icon size={18} />
                </div>
            </div>
            <p className="pg-ring-pct" style={{ color }}>{pct}<span style={{ fontSize: 13 }}>%</span></p>
            <p className="pg-ring-label">{label}</p>
        </div>
    );
}

export default function HabitRings() {
    return (
        <div className="card">
            <div className="pg-card-header">
                <p className="section-label">Habit Completion</p>
                <MoreHorizontal size={18} color="var(--text-muted)" style={{ cursor: "pointer" }} />
            </div>
            <div className="pg-rings-row">
                {HABITS.map((h) => (
                    <Ring key={h.label} {...h} />
                ))}
            </div>
        </div>
    );
}