import React, { useEffect } from "react";
import WindowBar    from "./components/layout/WindowBar";
import BottomNav    from "./components/layout/BottomNav";
import HomePage     from "./pages/HomePage";
import TasksPage    from "./pages/TasksPage";
import JournalPage  from "./pages/JournalPage";
import TimerPage    from "./pages/TimerPage";
import useUIStore   from "./store/uiStore";
import useTasksStore from "./store/tasksStore";

const PAGES = [HomePage, TasksPage, TimerPage, JournalPage];

export default function App() {
  const activeNav = useUIStore((s) => s.activeNav);
  const ActivePage = PAGES[activeNav];

  const loadTasks = useTasksStore((s) => s.loadTasks);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div className="app-root">
      <WindowBar />
      <ActivePage />
      <BottomNav />
    </div>
  );
}