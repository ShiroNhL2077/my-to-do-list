import React, { useState } from "react";
import ListItem from "./ListItem";

export function ToDoList() {
  const [List, setList] = useState([]);
  const [NewTask, setNewTask] = useState("");
  const getTask = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    if (NewTask.length === 0) {
      alert("Cannot add empty tasks, be serious !");
    } else if (List.includes(NewTask)) {
      alert(
        "Cannot add this task again, just mention how the frequency in the task next time !"
      );
    } else if (List.length === 5) {
      alert("That's all for today, make sure to finish your tasks !");
    } else {
      setList([...List, NewTask]);
      document.getElementById("myForm").reset();
    }
  };
  const [Finished, setFinished] = useState(0);
  return (
    <div>
      <header className="container-fluid bg-dark py-3">
        <p className="display-1 text-warning text-center fw-bold">To Do List</p>
      </header>
      <main className="container py-3">
        <div>
          <p className="display-4 fw-bold text-center">Today's Tasks</p>
          <p className="display-5 text-center">(To Do)</p>
        </div>
        <form id="myForm" className="my-5">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="taskLabel"
              placeholder="Task Label"
              onChange={(e) => getTask(e)}
            />
            <label>Task Label</label>
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary col-12"
            onClick={(key) => addTask(key)}
          >
            Add Task
          </button>
        </form>
        <div className="d-flex justify-content-between">
          <div className="card list-card p-3 col-3 bg-dark rounded">
            {/* {List.length === 5 ? (
                  <img src="5tasks.png" className="card-img-top" alt="..." />
                ) : List.length === 4 ? (
                  <img src="4tasks.png" className="card-img-top" alt="..." />
                ) : List.length === 3 ? (
                  <img src="3tasks.png" className="card-img-top" alt="..." />
                ) : List.length === 2 ? (
                  <img src="2tasks.png" className="card-img-top" alt="..." />
                ) : List.length === 1 ? (
                  <img src="1task.png" className="card-img-top" alt="..." />
                ) : (
                  <img src="0tasks.png" className="card-img-top" alt="..." />
                )} */}
                <img src="todo.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              {List.length === 5 ? (
                <p className="fs-2 fw-bold text-success text-center">
                  GOOD JOB TODAY
                </p>
              ) : List.length === 4 ? (
                <p className="fs-2 fw-bold text-warning text-center">
                  You still have 1 Task slot available
                </p>
              ) : List.length === 3 ? (
                <p className="fs-2 fw-bold text-warning text-center">
                  You still have 2 Task slots available
                </p>
              ) : List.length === 2 ? (
                <p className="fs-2 fw-bold text-warning text-center">
                  You still have 3 Task slots available
                </p>
              ) : List.length === 1 ? (
                <p className="fs-2 fw-bold text-warning text-center">
                  You still have 4 Task slots available
                </p>
              ) : (
                <p className="fs-2 fw-bold text-warning text-center">
                  You still have 5 Task slots available
                </p>
              )}
            </div>
          </div>
          <div className="col-8">
            {List &&
              List.map((el) => {
                return <ListItem content={el} key={el} />;
              })}
          </div>
        </div>
      </main>
    </div>
  );
}
