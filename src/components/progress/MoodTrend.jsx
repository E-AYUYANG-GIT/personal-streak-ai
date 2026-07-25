import { MoreHorizontal } from "lucide-react";
import { MOOD_TREND } from "../../lib/constants";

export default function MoodTrend() {
    return (
        <div className="card">
            <div className="pg-card-header">
                <p className="section-label">Mood Trend (7 Days)</p>
                <MoreHorizontal size={18} color="var(--text-muted)" style={{ cursor: "pointer" }} />
            </div>

            <div className="pg-mood-row">
                {MOOD_TREND.map(({ day, emoji }, i) => (
                    <div key={i} className="pg-mood-col">
                        <div className="pg-mood-avatar">
                            <span style={{ fontSize: 28 }}>🧑‍💻</span>
                        </div>
                        <span className="pg-mood-day">{day}</span>
                        <span className="pg-mood-emoji">{emoji}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}