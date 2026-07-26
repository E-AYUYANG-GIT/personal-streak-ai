import useTasksStore from "../../store/tasksStore";
import TaskRow from "./TaskRow";

export default function TaskListSection() {
  const { getFilteredTasks } = useTasksStore();
  const allTasks = getFilteredTasks();

  const pending   = allTasks.filter((t) => !t.completed);
  const completed = allTasks.filter((t) => t.completed);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric",
  });

  return (
    <div className="tk-list-wrap">
      {/* Today section */}
      <div className="tk-section-header">
        <span className="tk-section-title">
          Today <span className="tk-section-date">• {today}</span>
        </span>
        <span className="tk-section-count">{allTasks.length} tasks</span>
      </div>

      <div className="tk-task-list">
        {pending.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}
      </div>

      {/* Completed section */}
      {completed.length > 0 && (
        <>
          <div className="tk-section-header" style={{ marginTop: 20 }}>
            <span className="tk-section-title">Completed Today</span>
            <span className="tk-section-count">{completed.length}</span>
          </div>
          <div className="tk-task-list">
            {completed.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}