import AvatarCard        from "../components/home/AvatarCard";
import ProfileCard       from "../components/settings/ProfileCard";
import AppearanceCard    from "../components/settings/AppearanceCard";
import CharacterCard     from "../components/settings/CharacterCard";
import NotificationsCard from "../components/settings/NotificationsCard";
import ProductivityCard  from "../components/settings/ProductivityCard";
import DataBackupCard    from "../components/settings/DataBackupCard";
import AIAssistantCard   from "../components/settings/AIAssistantCard";
import AboutCard         from "../components/settings/AboutCard";

export default function SettingsPage() {
  return (
    <div className="st-root">

      {/* ── LEFT SIDEBAR ── */}
      <aside className="st-sidebar">
        <AvatarCard name="Elizar" />

        {/* Motivation card */}
        <div className="card">
          <p className="greeting" style={{ fontSize: 14 }}>You're doing amazing! ⭐</p>
          <p className="greet-sub" style={{ marginTop: 6 }}>
            Small changes in settings can make a big difference.
          </p>
        </div>

        {/* Current Streak mini */}
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
            <p className="focus-text">Small steps everyday<br />lead to big results.</p>
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="st-main">

        {/* Page header */}
        <div>
          <h1 className="pg-page-title">Settings</h1>
          <p className="pg-page-sub">Personalize your Personal Streak AI experience.</p>
        </div>

        {/* Row 1 — Profile (left) + Appearance (right, wider) */}
        <div className="st-grid-profile">
          <ProfileCard />
          <AppearanceCard />
        </div>

        {/* Row 2 — Character (left) + Notifications (center) + AI Assistant (right) */}
        <div className="st-grid-3">
          <CharacterCard />
          <NotificationsCard />
          <AIAssistantCard />
        </div>

        {/* Row 3 — Productivity (left) + Data & Backup (center) + About (right) */}
        <div className="st-grid-3">
          <ProductivityCard />
          <DataBackupCard />
          <AboutCard />
        </div>

      </main>
    </div>
  );
}