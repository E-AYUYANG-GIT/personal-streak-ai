import { CalendarDays, ChevronDown } from "lucide-react";
import AvatarCard from "../components/home/AvatarCard";
import OverallProgressBanner from "../components/progress/OverallProgressBanner";
import WeeklyActivity from "../components/progress/WeeklyActivity";
import HabitRings from "../components/progress/HabitRings";
import MonthlySummary from "../components/progress/MonthlySummary";
import Achievements from "../components/progress/Achievements";
import MoodTrend from "../components/progress/MoodTrend";
import CategoryBreakdown from "../components/progress/CategoryBreakdown";
import AIInsightCard from "../components/progress/AIInsightCard";
import RecentMilestones from "../components/progress/RecentMilestones";

export default function ProgressPage() {
  return (
    <div className="pg-root">

      {/* ── LEFT SIDEBAR ── */}
      <aside className="pg-sidebar">
        <AvatarCard
          name="Elizar"
          greeting="Keep going, Elizar! ☀️"
          sub="Your consistency today builds your success tomorrow."
        />
        {/* Current Streak mini card */}
        <div className="card pg-streak-mini">
          <p className="section-label">Current Streak</p>
          <div className="pg-streak-mini-row">
            <span className="pg-streak-mini-num">30</span>
            <span className="pg-streak-mini-unit">days</span>
            <span style={{ fontSize: 32, marginLeft: "auto" }}>🔥</span>
          </div>
          <p className="pg-streak-mini-best">Best Streak: 42 days</p>
        </div>
        {/* Focus card */}
        <div className="card">
          <div className="focus-row" style={{ marginTop: 0 }}>
            <span style={{ fontSize: 34 }}>🌱</span>
            <p className="focus-text">Small steps every day<br />lead to big results.</p>
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="pg-main">

        {/* Page header */}
        <div className="pg-page-header">
          <div>
            <h1 className="pg-page-title">Progress</h1>
            <p className="pg-page-sub">Track your growth and celebrate your consistency.</p>
          </div>
          <button className="pg-period-btn">
            <CalendarDays size={15} color="var(--brown-mid)" />
            This Month
            <ChevronDown size={14} color="var(--text-muted)" />
          </button>
        </div>

        {/* Overall banner */}
        <OverallProgressBanner />

        {/* Row 1: Weekly Activity + Habit Completion + Monthly Summary */}
        <div className="pg-grid-3">
          <WeeklyActivity />
          <HabitRings />
          <MonthlySummary />
        </div>

        {/* Row 2: Achievements + Mood Trend + Category Breakdown */}
        <div className="pg-grid-3">
          <Achievements />
          <MoodTrend />
          <CategoryBreakdown />
        </div>

        {/* Row 3: AI Insight + Recent Milestones */}
        <div className="pg-grid-ai">
          <AIInsightCard />
          <RecentMilestones />
        </div>

      </main>
    </div>
  );
}