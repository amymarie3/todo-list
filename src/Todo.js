import React, { useState, useEffect } from 'react';
import './Todo.css';

function Task({ task, index, toggleTaskCB, removeTaskCB }) {
    let btnText = task.completed ? "Not Done": "Complete";
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}
            <button class="btn-remove" onClick={()=>removeTaskCB(index)}>X</button>
            <button onClick={()=>toggleTaskCB(index)}>{btnText}</button>
        </div>
    );
}

function InputTask({addTaskCB}) {
    const [value, setValue] = useState("");

    const handleSubmit = function(e){
        e.preventDefault();
        if(!value) return;
        addTaskCB(value);
        setValue("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type= "text" className="input" value={value} placeholder="Add new task"
                onChange={e=>setValue(e.target.value)} />            
            </form>
        </div>
    );

}

function Todo() {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Coffee",
            completed: true
        },
        {
            title: "Check Slack",
            completed: true
        },
        {
            title: "Refill Coffee",
            completed: false
        }
    ]);
    useEffect(() => { 
        setTasksRemaining(tasks.filter(task => !task.completed).length) 
      });

    const addTaskCB = function(value){
        const newTasks =[... tasks, {title:value, completed:false}];
        setTasks(newTasks);
    }

    const toggleTaskCB = function(index){
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);   
    }

    const removeTaskCB = function(index){
        const newTasks = [...tasks];
        newTasks.splice(index,1);
        setTasks(newTasks); 
    }

    return (
        <div class ="todo-container">
            <div className="header">Pending tasks ({tasksRemaining})</div>
            <div> <InputTask addTaskCB= {addTaskCB} /> </div>
            <div>
                {tasks.map((task,index) => (
                    <Task task={task} index={index} key={index} toggleTaskCB={toggleTaskCB} 
                    removeTaskCB={removeTaskCB}/>
                ))}
            </div>
        </div>
    );
}


export default Todo;