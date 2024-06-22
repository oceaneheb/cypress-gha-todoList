import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <div className="task-input">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Ajouter une tâche"
          />
          <button onClick={addTask}>Ajouter</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} data-cy="todo">
              {task}
              <button onClick={() => deleteTask(index)}>Supprimer</button>
            </li>
          ))}
        </ul>
        <p>Il y a <span data-cy='number-task'>{tasks.length}</span> tâche à faire.</p>
      </header>
    </div>
  );
}

export default App;