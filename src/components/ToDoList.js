import React, { useState } from "react";
import ListItem from "./ListItem";

export default function ToDoList() {
    const AddTask =(e)=>{
        const [List,setList] = useState ([])
        const [listItem,setlistItem] = useState ('')
        e.preventDefault();
        
        

        
    }
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
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="taskLabel" placeholder="Task Label" />
                <label for="taskLabel">Task Label</label>
            </div>
            <button type="submit" class="btn btn-outline-primary col-12" onClick={AddTask()}>Add Task</button>
        </form>
        <div className="d-flex justify-content-between">
            <div className="card" style={{width: '18rem'}}>
                <img src="todo.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div>
                <ListItem />
            </div>
        </div>
      </main>
    </div>
  );
}
