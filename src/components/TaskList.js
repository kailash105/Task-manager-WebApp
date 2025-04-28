import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleComplete, onDeleteTask, onEditTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available. Add one now!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
