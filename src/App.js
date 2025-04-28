import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, dueDate, dueTime) => {
    const newTask = {
      id: uuidv4(),
      name,
      dueDate,
      dueTime,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const editTask = (id, newName, newDate, newTime) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, name: newName, dueDate: newDate, dueTime: newTime }
        : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'completed') return task.completed;
      if (filter === 'incomplete') return !task.completed;
      return true;
    })
    .sort((a, b) => {
      const dateTimeA = new Date(`${a.dueDate}T${a.dueTime || '00:00'}`);
      const dateTimeB = new Date(`${b.dueDate}T${b.dueTime || '00:00'}`);
      return dateTimeA - dateTimeB;
    });

  return (
    <div className="app-container">
      <div className="app-card">
        <h1>Task Manager</h1>
        <TaskForm onAddTask={addTask} />
        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggleComplete={toggleComplete}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;
