import { Search, Plus } from "lucide-react";
import React, { useState } from 'react'; 
import AddTaskModal from '../modals/AddTaskModal';
import useTasksStore from '../../store/tasksStore';

export default function TaskHeader({ onAddTask }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addTask = useTasksStore((state) => state.addTask);

  const handleAddTask = (newTask) => {
    // Add to Zustand store
    if (addTask) {
      addTask(newTask);
    }
    // Also trigger parent callback if passed down
    if (onAddTask) {
      onAddTask(newTask);
    }
  };

  return (
    <div className="tk-header">
      <div className="tk-header-main">
        <h1 className="pg-page-title">Tasks</h1>
        <p className="pg-page-sub">Stay focused and get things done.</p>
      </div>

      <div className="tk-header-actions">
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="add-task-btn tk-add-btn"
        >
          <Plus size={15} />
          Add Task
        </button>
      </div>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
}