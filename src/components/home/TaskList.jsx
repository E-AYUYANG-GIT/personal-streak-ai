import React, { useState } from 'react';
import { Plus, CheckCircle2, Clock, CheckSquare } from 'lucide-react';
import { CATEGORIES } from '../../lib/constants';
import useTasksStore from '../../store/tasksStore';
import AddTaskModal from '../modals/AddTaskModal';

export default function TaskList() {
  const { tasks, toggleTask, addTask } = useTasksStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (newTask) => {
    if (addTask) {
      addTask(newTask);
    }
  };

  return (
    <>
      <div className="task-section-header">
        <div className="task-section-title">
          <CheckSquare size={17} color="#613C2C" />
          Today's Tasks
        </div>

        <button className="add-task-btn" onClick={() => setIsModalOpen(true)}>
          <Plus size={14} />
          Add Task
        </button>
      </div>

      <div className="task-list">
        {tasks.map(({ id, title, subtitle, time, category, completed }) => {
          const cat = CATEGORIES.find((c) => c.key === category);
          const Icon = cat?.icon;

          return (
            <div
              key={id}
              className={`task-item${completed ? ' done' : ''}`}
              onClick={() => toggleTask(id)}
            >
              {/* Checkbox */}
              <div className={`task-cb${completed ? ' checked' : ''}`}>
                {completed && <CheckCircle2 size={16} color="#fff" />}
              </div>

              {/* Category Icon */}
              <div
                className="task-icon-wrap"
                style={{ background: cat?.bg ?? '#F3F4F6' }}
              >
                {Icon && <Icon size={18} color={cat?.color ?? '#9CA3AF'} />}
              </div>

              {/* Task Body */}
              <div className="task-body">
                <p className={`task-name${completed ? ' done' : ''}`}>
                  {title}
                </p>
                <p className="task-hint">{subtitle}</p>
              </div>

              {/* Time / Completed */}
              {completed ? (
                <span className="done-badge">Completed</span>
              ) : (
                <div className="time-chip">
                  <Clock size={11} color="#9CA3AF" />
                  {time}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </>
  );
}