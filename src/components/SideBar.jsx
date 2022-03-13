import React, { useState } from 'react'
import add from '../images/add-svg.svg'
import './SideBar.css'
import { v4 as uuidv4 } from 'uuid';


const SideBar = ({createTask}) =>{
// State para controlar datos de formulario
    const [task, setTask] = useState({
        taskTitle:'',
        taskDate:'',
        taskDescription:'',
        completed:false
    })
//Funcion para recibir datos del formulario
    const handleTask = (e) =>{
        setTask({
            ...task,
            [e.target.name]: e.target.value 
        })
    }
// Destructuring
    const {taskTitle, taskDate, taskDescription} = task

//Prevenir default event del formulario
    const addTask = (e) =>{
        e.preventDefault()

        task.id = uuidv4();

        createTask(task)

        setTask({
            taskTitle:'',
            taskDate:'',
            taskDescription:'',
        })
    }

    return(
        <div className="sideBarContainer">
            <h1>Add Task</h1>
            <img src={add} alt="add task icon"/>
            <form className='taskForm' autoComplete="off" onSubmit={addTask}>
                <label htmlFor='taskTitle'>Task Title</label>
                <input 
                    name="taskTitle"
                    type="text"
                    id="taskTitle"
                    value={taskTitle}
                    onChange={handleTask}
                    required
                />

                <label htmlFor='taskDate'>Task Date</label>
                <input 
                    name="taskDate"
                    type="datetime-local"
                    id="taskDate"
                    value={taskDate}
                    onChange={handleTask}
                    required
                />

                <label htmlFor='taskDescription'>Task Description</label>
                <textarea 
                    name="taskDescription"
                    id="taskDescription"
                    value={taskDescription}
                    onChange={handleTask}
                    maxLength="150"
                    required
                />

                <button
                    type='submit'
                >
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default SideBar;