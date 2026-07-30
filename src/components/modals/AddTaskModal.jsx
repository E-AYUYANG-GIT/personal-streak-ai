import React, { useState } from 'react';
import { CATEGORIES, PRIORITY_STYLES } from '../../lib/constants.js';

const AddTaskModal = ({ isOpen, onClose, onAddTask }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]); // Defaults to Work
  const [priority, setPriority] = useState('Medium'); // Capitalized to match PRIORITY_STYLES keys

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    // Automatically generate current local time (e.g., "02:30 PM")
    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const newTask = {
      id: Date.now().toString(),
      title: title.trim(),
      subtitle: subtitle.trim(),
      time: currentTime,
      category: selectedCategory.key,
      Icon: selectedCategory.icon, // Lucide icon reference directly assigned
      priority,
      completed: false,
    };

    onAddTask(newTask);

    // Reset Form
    setTitle('');
    setSubtitle('');
    setSelectedCategory(CATEGORIES[0]);
    setPriority('Medium');

    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          padding: '24px',
          borderRadius: '16px',
          width: '90%',
          maxWidth: '460px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Create New Task</h2>
          <button
            type="button"
            onClick={onClose}
            style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#666' }}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* 1. Title */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
              Title *
            </label>
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* 2. Subtitle */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
              Subtitle
            </label>
            <input
              type="text"
              placeholder="Task details or description"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* 3. Category Selection with Lucide Icons */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              Category
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory.key === cat.key;
                const IconComponent = cat.icon;

                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      border: `1px solid ${isSelected ? cat.color : '#E2E8F0'}`,
                      background: isSelected ? cat.bg : '#F8FAFC',
                      color: isSelected ? cat.color : '#475569',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <IconComponent size={16} color={isSelected ? cat.color : '#64748B'} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Priority Selection (Last Section) */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              Priority
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {Object.entries(PRIORITY_STYLES).map(([key, style]) => {
                const isSelected = priority === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setPriority(key)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '8px',
                      borderRadius: '8px',
                      border: `1px solid ${isSelected ? style.dot : '#E2E8F0'}`,
                      background: isSelected ? style.bg : '#FFFFFF',
                      color: isSelected ? style.text : '#64748B',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: style.dot,
                      }}
                    />
                    {style.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '10px 18px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                background: '#f5f5f5',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '10px 18px',
                borderRadius: '8px',
                border: 'none',
                background: '#613C2C',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;