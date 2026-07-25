import AvatarCard from "../home/AvatarCard";

export default function SettingsSidebar({ streak = 30, bestStreak = 42 }) {
    return (
        <aside className="sp-sidebar">
            <AvatarCard
                name="Elizar"
                greeting="You're doing amazing! ✨"
                sub="Small changes in settings can make a big difference."
            />

            <div className="card sp-streak-box">
                <p className="section-label">Current Streak</p>
                <div className="sp-streak-row">
                    <span className="sp-streak-number">{streak}</span>
                    <span className="sp-streak-unit">days</span>
                    <span className="sp-streak-flame">🔥</span>
                </div>
                <p className="sp-streak-best">Best Streak: {bestStreak} days</p>
            </div>

            <div className="card sp-focus-card">
                <h4 className="sp-focus-title">Today's Focus</h4>
                <p className="sp-focus-text">
                    Small steps everyday lead to big results.
                </p>
                <div className="sp-focus-plant">🌱</div>
            </div>
        </aside>
    );
}