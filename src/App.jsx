import WindowBar    from "./components/layout/WindowBar";
import BottomNav    from "./components/layout/BottomNav";
import HomePage     from "./pages/HomePage";
import TasksPage    from "./pages/TasksPage";
import JournalPage  from "./pages/JournalPage";
import ProgressPage from "./pages/ProgressPage";
import SettingsPage from "./pages/SettingsPage";
import useUIStore   from "./store/uiStore";

const PAGES = [HomePage, TasksPage, JournalPage, ProgressPage, SettingsPage];

export default function App() {
  const activeNav = useUIStore((s) => s.activeNav);
  const ActivePage = PAGES[activeNav];

  return (
    <div className="app-root">
      <WindowBar />
      <ActivePage />
      <BottomNav />
    </div>
  );
}