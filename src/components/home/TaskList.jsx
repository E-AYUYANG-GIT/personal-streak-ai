import { Plus, CheckCircle2, Clock, CheckSquare } from "lucide-react";
import useTasksStore from "../../store/tasksStore";

export default function TaskList() {
  const { tasks, toggleTask } = useTasksStore();

  return (
    <>
      <div className="task-section-header">
        <div className="task-section-title">
          <CheckSquare size={17} color="#613C2C" />
          Today's Tasks
        </div>
        <button className="add-task-btn">
          <Plus size={14} /> Add Task
        </button>
      </div>
      <div className="task-list">
        {tasks.map(({ id, title, subtitle, time, iconBg, Icon: TaskIcon, completed: done }) => (
          <div key={id} className={`task-item${done ? " done" : ""}`} onClick={() => toggleTask(id)}>
            <div className={`task-cb${done ? " checked" : ""}`}>
              {done && <CheckCircle2 size={16} color="#fff" />}
            </div>
            <div className="task-icon-wrap" style={{ background: iconBg }}>
              <TaskIcon size={18} color="#fff" />
            </div>
            <div className="task-body">
              <p className={`task-name${done ? " done" : ""}`}>{title}</p>
              <p className="task-hint">{subtitle}</p>
            </div>
            {done ? (
              <span className="done-badge">Completed</span>
            ) : (
              <div className="time-chip">
                <Clock size={11} color="#9CA3AF" /> {time}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}