import TaskRow from "./TaskRow";

export default function TaskListSection({ title, countLabel, tasks, onToggle }) {
  if (tasks.length === 0) return null;

  return (
    <div className="tp-list-section">
      <div className="tp-section-header">
        <span className="tp-section-title">{title}</span>
        <span className="tp-section-count">{countLabel}</span>
      </div>
      <div className="tp-task-list">
        {tasks.map((task) => (
          <TaskRow key={task.id} task={task} onToggle={onToggle} />
        ))}
      </div>
    </div>
  );
}