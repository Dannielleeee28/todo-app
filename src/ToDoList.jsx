import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState(["Add your tasks..."]);
  const [newTasks, setNewTasks] = useState([]);

  function handleInputChange(e) {
    setNewTasks(e.target.value);
  }
  function addTasks() {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveUpTask(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveDownTask(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <>
      <div className="container">
        <div className="inputAndButton">
          <input
            className="inputTask"
            type="text"
            value={newTasks}
            placeholder="Enter your task"
            onChange={handleInputChange}
          />
          <button className="addBtn" onClick={addTasks}>
            {" "}
            <i className="fa-solid fa-plus fa-lg"></i>
          </button>
        </div>

        <ol className="scroll-area">
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <div className="btn-group">
                <button onClick={() => deleteTask(index)}>
                  {" "}
                  <i className="fa-solid fa-trash fa-lg"></i>
                </button>
                <button onClick={() => moveUpTask(index)}>
                  {" "}
                  <i className="fa-solid fa-square-caret-up fa-lg"></i>
                </button>
                <button onClick={() => moveDownTask(index)}>
                  {" "}
                  <i className="fa-solid fa-square-caret-down fa-lg"></i>
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
export default ToDoList;
