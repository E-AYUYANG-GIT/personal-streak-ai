import SettingsSidebar from "../components/settings/SettingsSidebar";
import ProfileCard from "../components/settings/ProfileCard";
import AppearanceCard from "../components/settings/AppearanceCard";
import CharacterStickersCard from "../components/settings/CharacterStickersCard";
import NotificationsCard from "../components/settings/NotificationsCard";
import AIAssistantCard from "../components/settings/AIAssistantCard";
import ProductivityCard from "../components/settings/ProductivityCard";
import DataBackupCard from "../components/settings/DataBackupCard";
import AboutCard from "../components/settings/AboutCard";

export default function SettingsPage() {
  return (
    <div className="sp-layout">
      <SettingsSidebar streak={30} bestStreak={42} />

      <main className="sp-main">
        <header className="sp-page-header">
          <h1 className="sp-page-title">Settings</h1>
          <p className="sp-page-subtitle">
            Personalize your Personal Streak AI experience.
          </p>
        </header>

        <div className="sp-grid">
          {/* Row 1 */}
          <ProfileCard
            name="Elizar Yu"
            streak={30}
            memberSince="July 2026"
            onEdit={() => console.log("Edit profile")}
          />
          <AppearanceCard />

          {/* Row 2 */}
          <CharacterStickersCard />
          <NotificationsCard />
          <AIAssistantCard />

          {/* Row 3 */}
          <ProductivityCard />
          <DataBackupCard />
          <AboutCard />
        </div>
      </main>
    </div>
  );
}