import { Clock, CheckCircle2, Flame } from "lucide-react";
import { CATEGORIES, PRIORITY_STYLES } from "../../lib/constants";
import useTasksStore from "../../store/tasksStore";

export default function TaskRow({ task }) {
  const { toggleFullTask } = useTasksStore();
  const { id, title, subtitle, time, category, priority, streak, completed } = task;

  const cat  = CATEGORIES.find((c) => c.key === category);
  const pri  = priority ? PRIORITY_STYLES[priority] : null;
  const Icon = cat?.icon;

  return (
    <div
      className={`tk-task-row${completed ? " done" : ""}`}
      onClick={() => toggleFullTask(id)}
    >
      {/* Checkbox */}
      <div className={`tk-cb${completed ? " checked" : ""}`}>
        {completed && <CheckCircle2 size={14} color="#fff" />}
      </div>

      {/* Category icon */}
      <div className="tk-task-icon" style={{ background: cat?.bg ?? "#F3F4F6" }}>
        {Icon && <Icon size={18} color={cat?.color ?? "#9CA3AF"} />}
      </div>

      {/* Body */}
      <div className="tk-task-body">
        <div className="tk-task-title-row">
          <span className={`tk-task-name${completed ? " done" : ""}`}>{title}</span>
        </div>
        <p className="tk-task-sub">{subtitle}</p>
        {/* Category badge */}
        {cat && (
          <span className="tk-cat-badge" style={{ color: cat.color, background: cat.bg }}>
            {cat.label}
          </span>
        )}
      </div>

      {/* Right meta */}
      <div className="tk-task-meta">
        {/* Time */}
        <div className="tk-time-chip">
          <Clock size={11} color="var(--text-muted)" />
          {time}
        </div>

        {/* Streak badge */}
        {streak && (
          <div className="tk-streak-chip">
            <Flame size={11} color="#E57338" />
            {streak}
          </div>
        )}

        {/* Priority badge */}
        {pri && !completed && (
          <div className="tk-priority-chip" style={{ background: pri.bg, color: pri.text }}>
            <span className="tk-priority-dot" style={{ background: pri.dot }} />
            {pri.label}
          </div>
        )}

        {/* Completed badge */}
        {completed && (
          <span className="done-badge">Completed</span>
        )}
      </div>
    </div>
  );
}