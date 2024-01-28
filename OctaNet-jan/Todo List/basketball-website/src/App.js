import React from 'react';
import './App.css';

const Task = ({ title, deadline, priority, label, onTaskComplete }) => {
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    if (isComplete) {
      onTaskComplete({ title, priority });
    }
  }, [isComplete, onTaskComplete, title, priority]);

  const handleComplete = () => {
    setIsComplete(true);
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>Deadline: {deadline}</p>
      <p>Priority: {priority}</p>
      <p>Label: {label}</p>
      {isComplete ? (
        <p style={{ color: 'green' }}>Task Completed!</p>
      ) : (
        <button onClick={handleComplete}>Mark as Complete</button>
      )}
      <hr />
    </div>
  );
};

const TaskList = () => {
  const [completedTasks, setCompletedTasks] = React.useState([]);
  const onTaskComplete = (task) => {
    setCompletedTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div>
      <h2>Task List</h2>
      <Task
        title="Set up project structure"
        deadline="Today"
        priority="High"
        label="Setup"
        onTaskComplete={onTaskComplete}
      />
      {/* Add more Task components with different properties */}
      <div>
        <h2>Completed Tasks</h2>
        {completedTasks.map((task, index) => (
          <p key={index}>
            Completed: {task.title} (Priority: {task.priority})
          </p>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Basketball Website Project</h1>
      <TaskList />
    </div>
  );
};

export default App;
