import React from 'react';
import './Task.css';
import deleted from '../images/delete.svg';
import complete from '../images/complete.svg';

const Task = ({task, completeTask, deleteTask, completed}) =>{
    return (
        <div className="card">
            <h3>{task.taskTitle}</h3>
            <h4>{task.taskDate}</h4>
            <p>{task.taskDescription}</p>

            <div className='actionButtons'>
                {task.completed ? <span className='completed' onClick={() => deleteTask(task.id)}>completado</span>: 
                <div>
                    <button className='botones' onClick={() => completeTask(task)}><input type="image" src={complete} height="30" width="30" alt='complete task'></input></button>
                    
                    <button className='botones' onClick={() => deleteTask(task.id)}><input type="image" src={deleted} height="30" width="30" alt='delete task'></input></button>
                </div>}
            </div>

        </div>
    )
}

export default Task;