import { Trophy } from "lucide-react";

export default function StreakCard({ current = 30, best = 42 }) {
  return (
    <div className="streak-card">
      <div className="flame-emoji">🔥</div>
      <p className="streak-num">{current}</p>
      <p className="streak-label">DAY STREAK</p>
      <div className="best-streak-pill">
        <Trophy size={15} color="#F59E0B" />
        <span className="best-label">Best Streak</span>
        <span className="best-days">{best} Days</span>
      </div>
    </div>
  );
}