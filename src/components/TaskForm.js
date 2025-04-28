import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') return;

    onAddTask(taskName, dueDate, dueTime);
    setTaskName('');
    setDueDate('');
    setDueTime('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <input
        type="time"
        value={dueTime}
        onChange={(e) => setDueTime(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
