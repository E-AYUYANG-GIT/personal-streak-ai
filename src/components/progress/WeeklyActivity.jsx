import { CheckCircle2 } from "lucide-react";
import { WEEK_DAYS, WEEK_STATUS } from "../../lib/constants";

export default function WeeklyActivity() {
    return (
        <div className="card">
            <p className="section-label" style={{ marginBottom: 16 }}>Weekly Activity</p>

            <div className="pg-week-row">
                {WEEK_DAYS.map((d, i) => (
                    <div key={i} className="pg-day-col">
                        <span className="pg-day-lbl">{d}</span>
                        {WEEK_STATUS[i] === "done" && (
                            <div className="pg-day-done">
                                <CheckCircle2 size={15} color="#fff" />
                            </div>
                        )}
                        {WEEK_STATUS[i] === "partial" && (
                            <div className="pg-day-partial" />
                        )}
                        {WEEK_STATUS[i] === "none" && (
                            <div className="pg-day-none" />
                        )}
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="pg-legend">
                <div className="pg-legend-item">
                    <div className="pg-legend-dot" style={{ background: "var(--green)" }} />
                    <span>Completed</span>
                </div>
                <div className="pg-legend-item">
                    <div className="pg-legend-dot" style={{ background: "transparent", border: "2px solid var(--gold)" }} />
                    <span>Partial</span>
                </div>
                <div className="pg-legend-item">
                    <div className="pg-legend-dot" style={{ background: "#E5E7EB" }} />
                    <span>No Activity</span>
                </div>
            </div>
        </div>
    );
}