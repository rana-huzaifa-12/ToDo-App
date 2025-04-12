import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [taskVal, setTaskVal] = useState(""); // Store input value
  // Initialize taskList from localStorage or use an empty array if nothing is stored
  const [taskList, setTaskList] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const addTask = () => {
    if (taskVal.trim() === "") {
      alert(" Please enter a task")
      return;
    }; // Prevent adding empty tasks
    const newTaskList = [...taskList, taskVal]; // Create new list with the added task
    setTaskList(newTaskList); // Update state
    setTaskVal(""); // Clear input after adding
  };

  // Function to delete a task
  const deleteTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index)); // Remove task at the given index
  };

  // Save taskList to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <div className="app-text">
        <h1>TO DO LIST APP</h1>
      </div>

      <div className="input-field">
        <input
          type="text"
          placeholder="Enter the task"
          value={taskVal}
          onChange={(e) => setTaskVal(e.target.value)}
        />
        <button onClick={addTask}>ADD TASK</button>
      </div>

      <div className="tasks">
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>
              {task}
              {/* Add a delete button next to each task */}
              <button className='remove' onClick={() => deleteTask(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="ownership">
        <h3>MADE WITH <b>&#10084;</b> BY <span>RANA HUZAIFA</span></h3>
      </div>
    </>
  );
}

export default App;
