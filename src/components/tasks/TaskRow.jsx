import { Clock, Flame, CheckCircle2, Circle } from "lucide-react";
import { CATEGORIES, PRIORITY_STYLES } from "../../lib/constants";

function CategoryBadge({ categoryKey }) {
  const cat = CATEGORIES.find((c) => c.key === categoryKey);
  if (!cat) return null;
  const Icon = cat.icon;
  return (
    <span className="tp-cat-badge" style={{ background: cat.bg, color: cat.color }}>
      <Icon size={12} /> {cat.label}
    </span>
  );
}

function PriorityBadge({ priority }) {
  const p = PRIORITY_STYLES[priority];
  if (!p) return null;
  return (
    <span className="tp-prio-badge" style={{ background: p.bg, color: p.text }}>
      <span className="tp-prio-dot" style={{ background: p.dot }} />
      {p.label}
    </span>
  );
}

export default function TaskRow({ task, onToggle }) {
  const cat = CATEGORIES.find((c) => c.key === task.category);
  const Icon = cat?.icon || Circle;
  const isDone = task.completed;

  return (
    <div className={`tp-task-row ${isDone ? "tp-task-done" : ""}`}>
      <button className="tp-check" onClick={() => onToggle(task.id)} aria-label={isDone ? "Mark undone" : "Mark done"}>
        {isDone
          ? <CheckCircle2 size={22} color="#22C55E" />
          : <Circle size={22} color="#C0B8B0" />}
      </button>

      <div
        className="tp-task-icon"
        style={{ background: cat?.bg || "#F3F0EC", color: cat?.color || "#8B5E3C" }}
      >
        <Icon size={18} />
      </div>

      <div className="tp-task-body">
        <p className="tp-task-title">{task.title}</p>
        <p className="tp-task-sub">{task.subtitle}</p>
        <div className="tp-task-tags">
          {task.category && <CategoryBadge categoryKey={task.category} />}
          {task.priority && <PriorityBadge priority={task.priority} />}
        </div>
      </div>

      <div className="tp-task-meta">
        <div className="tp-task-time">
          <Clock size={12} color="#9CA3AF" />
          <span>{task.time}</span>
        </div>
        {task.streak && (
          <div className="tp-task-streak">
            <Flame size={12} color="#F59E0B" />
            <span>{task.streak}</span>
          </div>
        )}
      </div>
    </div>
  );
}