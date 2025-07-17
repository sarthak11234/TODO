import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now(),
      text: newTask
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do List App</h1>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      />

      <button onClick={handleAddTask} style={{ padding: '10px 20px' }}>Add Task</button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            {task.text}
            <button 
              onClick={() => handleDeleteTask(task.id)}
              style={{ marginLeft: '10px', color: 'white', backgroundColor: 'red', border: 'none', padding: '5px 10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
