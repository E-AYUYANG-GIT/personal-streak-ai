import { OVERALL_STATS } from "../../lib/constants";

export default function OverallProgressBanner() {
    const { pct, completed, total, streak, bestStreak } = OVERALL_STATS;
    const C = 2 * Math.PI * 40;
    const dashOffset = C - (pct / 100) * C;

    return (
        <div className="pg-banner">

            {/* ── LEFT: percentage + pills ── */}
            <div className="pg-banner-left">
                <p className="pg-banner-eyebrow">Overall Progress</p>
                <p className="pg-banner-pct">
                    {pct}<span className="pg-banner-pct-sym">%</span>
                </p>
                <p className="pg-banner-sub">{completed} of {total} tasks completed</p>
                <div className="pg-pill-row">
                    {Array.from({ length: total }).map((_, i) => (
                        <div key={i} className={`pg-pill ${i < completed ? "pg-pill-done" : "pg-pill-empty"}`} />
                    ))}
                </div>
            </div>

            {/* ── CENTER: flame + streak ── */}
            <div className="pg-banner-center">
                <div className="pg-flame-wrap">
                    <span className="pg-flame">🔥</span>
                </div>
                <div>
                    <p className="pg-streak-num">{streak}</p>
                    <p className="pg-streak-label">Day Streak</p>
                    <p className="pg-streak-sub">Keep it up!</p>
                </div>
            </div>

            {/* ── RIGHT: trophy + best streak ── */}
            <div className="pg-banner-right">
                <div className="pg-trophy-wrap">
                    <span className="pg-trophy">🏆</span>
                    <span className="pg-sparkle pg-sparkle-tl">✦</span>
                    <span className="pg-sparkle pg-sparkle-tr">✦</span>
                </div>
                <div className="pg-best-pill">
                    Best Streak: {bestStreak} days
                </div>
            </div>

        </div>
    );
}