import TaskSidebar     from "../components/tasks/TaskSidebar";
import TaskHeader      from "../components/tasks/TaskHeader";
import TaskListSection from "../components/tasks/TaskListSection";
import RightPanel      from "../components/tasks/RightPanel";

export default function TasksPage() {
  return (
    <div className="tp-layout">

      {/* ── LEFT: Vertical sidebar nav ── */}
      <TaskSidebar />

      {/* ── CENTER: Main task content ── */}
      <main className="tk-main">
        <TaskHeader />
        <TaskListSection />
      </main>

      {/* ── RIGHT: Progress + Filters + Categories + AI Tip ── */}
      <RightPanel />

    </div>
  );
}