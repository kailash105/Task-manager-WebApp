import React, { useState } from 'react';
import { motion } from 'framer-motion';

function TaskItem({ task, onToggleComplete, onDeleteTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDate, setEditedDate] = useState(task.dueDate);
  const [editedTime, setEditedTime] = useState(task.dueTime);

  const now = new Date();
  const dueDateTime = task.dueDate
    ? new Date(`${task.dueDate}T${task.dueTime || '00:00'}`)
    : null;
  const isOverdue = dueDateTime && dueDateTime < now && !task.completed;

  const handleSave = () => {
    onEditTask(task.id, editedName, editedDate, editedTime);
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className={`task-item ${isOverdue ? 'task-overdue' : ''}`}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="edit-input"
          />
          <input
            type="date"
            value={editedDate}
            onChange={(e) => setEditedDate(e.target.value)}
            className="edit-input"
          />
          <input
            type="time"
            value={editedTime}
            onChange={(e) => setEditedTime(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="checkbox"
          />
          <div className="task-content">
            <span className="task-name">{task.name}</span>
            {(task.dueDate || task.dueTime) && (
              <div className="task-due">
                {task.dueDate && `Due: ${task.dueDate}`}
                {task.dueTime && ` at ${task.dueTime}`}
              </div>
            )}
          </div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete-btn" onClick={() => onDeleteTask(task.id)}>
            Delete
          </button>
        </>
      )}
    </motion.div>
  );
}

export default TaskItem;
