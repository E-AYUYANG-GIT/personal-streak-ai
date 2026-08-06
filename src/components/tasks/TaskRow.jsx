// TaskRow.jsx
import { Clock, CheckCircle2, Flame, Trash2 } from "lucide-react";
import { CATEGORIES, PRIORITY_STYLES } from "../../lib/constants";
import useTasksStore from "../../store/tasksStore";

export default function TaskRow({ task }) {
  const { toggleTask, deleteTask } = useTasksStore();
  const { id, title, subtitle, time, categoryId, category, priority, streak, completed } = task;

  const catId = categoryId || category;
  const cat = CATEGORIES.find((c) => c.id === catId);
  const pri = priority ? PRIORITY_STYLES[priority] : null;
  const Icon = cat?.icon;

  const handleDelete = (e) => {
    e.stopPropagation();
    if (completed) return;
    deleteTask(id);
  };

  return (
    <div
      className={`tk-task-row${completed ? " done" : ""}`}
      onClick={() => toggleTask(id)}
    >
      {/* Checkbox */}
      <div className={`tk-cb${completed ? " checked" : ""}`}>
        {completed && <CheckCircle2 size={13} color="#fff" />}
      </div>

      {/* Category icon */}
      <div className="tk-task-icon" style={{ background: cat?.bg ?? "#F3F4F6" }}>
        {Icon && <Icon size={16} color={cat?.color ?? "#9CA3AF"} />}
      </div>

      {/* Body */}
      <div className="tk-task-body">
        <div className="tk-task-title-row">
          <span className={`tk-task-name${completed ? " done" : ""}`} title={title}>
            {title}
          </span>
          {cat && (
            <span className="tk-cat-badge" style={{ color: cat.color, background: cat.bg }}>
              {cat.label}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="tk-task-sub" title={subtitle}>{subtitle}</p>
        )}
      </div>

      {/* Right meta */}
      <div className="tk-task-meta">

        {streak ? (
          <div className="tk-streak-chip">
            <Flame size={11} color="#E57338" />
            {streak}
          </div>
        ) : null}

        {time && (
          <div className="tk-time-chip">
            <Clock size={11} color="var(--text-muted)" />
            {time}
          </div>
        )}

        {pri && !completed && (
          <div className="tk-priority-chip" style={{ background: pri.bg, color: pri.text }}>
            <span className="tk-priority-dot" style={{ background: pri.dot }} />
            <span>{pri.label}</span>
          </div>
        )}

        {completed && <span className="done-badge">Completed</span>}

        <button
          type="button"
          className={`tk-delete-btn${completed ? " disabled" : ""}`}
          onClick={handleDelete}
          disabled={completed}
          title={completed ? "Completed task cannot be deleted" : "Delete task"}
        >
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  );
}