import { Search, Plus } from "lucide-react";

export default function TaskHeader({ onAddTask }) {
  return (
    <div className="tk-header">
        <button className="add-task-btn tk-add-btn" onClick={onAddTask}>
          <Plus size={15} />
          Add Task
        </button>
    </div>
  );
}