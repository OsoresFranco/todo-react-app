import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Task from "./components/Task";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (task) => {
    if(tasks.length > 5){
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You can only have 6 simultaneous tasks',
      })
    }else{
    setTasks([
      ...tasks, 
      task
    ]);
  }};

  const completeTask = (task) =>{
    task.completed=true
    let newArray = [...tasks]
    setTasks(newArray)
  }

// Funcion para borrar Task
  const deleteTask = (id) =>{
    let newTaskArray = tasks.filter((task)=> task.id !== id)
    setTasks(newTaskArray)
  }

  return (
    <div className="main-container">
      <div className="stickyBar">
        <SideBar 
          createTask={createTask} 
        />
      </div>
      <div className="card-container">
        {/* Mapping Sobre las Task */}
        {tasks.map((task) => {
          return <Task 
          key={task.id} 
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
          />;
        })}
      </div>
    </div>
  );
}

export default App;
