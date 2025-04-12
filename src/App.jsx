import { useState, useEffect } from 'react';

function App() {
  const [taskVal, setTaskVal] = useState("");
  const [taskList, setTaskList] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const addTask = () => {
    if (taskVal.trim() === "") {
      alert("Please enter a task");
      return;
    }
    const newTaskList = [...taskList, taskVal];
    setTaskList(newTaskList);
    setTaskVal("");
  };

  const deleteTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-black text-white font-sans relative">
      {/* Header */}
      <div className="text-center text-gray-200 text-3xl pt-12 mb-5">
        <h1 >TO DO LIST APP</h1>
      </div>

      {/* Input Field */}
      <div className="flex justify-center flex-wrap mb-8 pt-18 ">
        <input
          type="text"
          placeholder="Enter the task"
          value={taskVal}
          onChange={(e) => setTaskVal(e.target.value)}
          className="h-10 w-40 sm:w-52 md:w-60 lg:w-72 xl:w-96 max-w-full text-lg px-5 capitalize outline-none border-2 border-gray-200 rounded bg-white text-black focus:border-red-700 transition-colors duration-300"
        />

        <button
          onClick={addTask}
          className="py-1 sm:py-2 md:py-2 lg:py-2
             px-4 sm:px-6 md:px-8 lg:px-10
             mx-2 sm:mx-3 md:mx-4 lg:mx-5
             text-sm sm:text-base md:text-lg
             font-medium bg-transparent border-2 border-white text-yellow-400 rounded cursor-pointer transition-all duration-300 hover:bg-white hover:text-red-600 hover:font-semibold active:bg-red-600 active:text-white"
        >
          ADD TASK
        </button>

      </div>

      {/* Tasks List */}
      <div className="flex justify-center">
        <ul className="list-none w-full mx-auto p-0 
               max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
          {taskList.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between
                 h-10 sm:h-11 md:h-12 lg:h-14
                 px-3 sm:px-4 md:px-5
                 my-1 sm:my-2
                 border border-gray-400 rounded bg-white/90 capitalize
                 text-sm sm:text-base md:text-lg
                 text-gray-800 transition-all duration-300
                 hover:bg-gray-300/90 hover:-translate-y-0.5"
            >
              {task}
              <button
                className="bg-none 
                   text-lg sm:text-xl md:text-2xl
                   border-none cursor-pointer text-red-500
                   hover:text-red-700 transition-colors duration-300"
                onClick={() => deleteTask(index)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

      </div>

      {/* Footer */}
      <div className="flex flex-col items-center text-center 
                mt-6 sm:mt-8 md:mt-10 lg:mt-12 
                text-xs sm:text-sm md:text-base lg:text-lg">
        <h3>
          MADE WITH <b className="text-red-500">&#10084;</b> BY{" "}
          <span className="text-yellow-400">RANA HUZAIFA</span>
        </h3>
      </div>

    </div>
  );
}

export default App;
