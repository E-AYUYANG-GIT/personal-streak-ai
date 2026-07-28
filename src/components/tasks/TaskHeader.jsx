import { Search, Plus } from "lucide-react";

export default function TaskHeader({ onAddTask }) {
  return (
    <div className="tk-header">
      <div className="tk-header-main">
        <h1 className="pg-page-title">Tasks</h1>
        <p className="pg-page-sub">Stay focused and get things done.</p>
      </div>
      <div className="tk-header-actions">
        <button className="add-task-btn tk-add-btn" onClick={onAddTask}>
          <Plus size={15} />
          Add Task
        </button>
      </div>
    </div>
  );
}