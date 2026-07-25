import { Search, Plus } from "lucide-react";

export default function TaskHeader() {
  return (
    <header className="tp-header">
      <div>
        <h1 className="tp-title">Tasks</h1>
        <p className="tp-subtitle">Stay focused and get things done.</p>
      </div>
      <div className="tp-header-actions">
        <button className="tp-icon-btn" aria-label="Search tasks">
          <Search size={18} color="#8B5E3C" />
        </button>
        <button className="tp-add-btn">
          <Plus size={16} /> Add Task
        </button>
      </div>
    </header>
  );
}