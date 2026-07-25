import { useState } from "react";

import TaskSidebar      from "../components/tasks/TaskSidebar";
import TaskHeader       from "../components/tasks/TaskHeader";
import TaskFilters      from "../components/tasks/TaskFilters";
import TaskListSection  from "../components/tasks/TaskListSection";
import RightPanel       from "../components/tasks/RightPanel";

import { INITIAL_TASKS_FULL } from "../lib/constants";
import { formatShortDate }    from "../lib/dateUtils";

export default function TasksPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [tasks, setTasks] = useState(INITIAL_TASKS_FULL);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  /* ── derived lists: MOVE, not duplicate ── */
  const pending = tasks.filter((t) => !t.completed);
  const done    = tasks.filter((t) => t.completed);

  const todayStr = formatShortDate(new Date());

  return (
    <div className="tp-layout">
      <TaskSidebar />

      <main className="tp-main">
        <TaskHeader />
        <TaskFilters active={activeFilter} onChange={setActiveFilter} />

        {/* ── Pending tasks ── */}
        {activeFilter !== "completed" && pending.length > 0 && (
          <TaskListSection
            title={`Today • ${todayStr}`}
            countLabel={`${pending.length} task${pending.length !== 1 ? "s" : ""}`}
            tasks={activeFilter === "all" ? pending : pending}
            onToggle={toggleTask}
          />
        )}

        {/* ── Completed section (only in "all" view, below pending) ── */}
        {activeFilter === "all" && done.length > 0 && (
          <TaskListSection
            title="Completed Today"
            countLabel={`${done.length}`}
            tasks={done}
            onToggle={toggleTask}
          />
        )}

        {/* ── Completed-only filter view ── */}
        {activeFilter === "completed" && (
          <TaskListSection
            title="Completed"
            countLabel={`${done.length} task${done.length !== 1 ? "s" : ""}`}
            tasks={done}
            onToggle={toggleTask}
          />
        )}

        {/* ── Empty states ── */}
        {(activeFilter === "today" || activeFilter === "upcoming") && pending.length === 0 && (
          <div className="tp-empty">No tasks for this filter 🎉</div>
        )}
      </main>

      <RightPanel tasks={tasks} />
    </div>
  );
}