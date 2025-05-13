import { useState } from 'react'
import "./TaskKeeper.css"


const TaskKeeper = () => {
    const [tasks, newTasks] = useState([])
    const [task, newTask] = useState('')




    function addToTaskList(){
        newTasks([...tasks, task]);
        newTask("");
    }

    function removeTask(index){
        newTasks(tasks.splice(index, 1));
    }


    

    return(
        <>
            <p className={'taskWords'}>Put Your Task Below</p>
            <input className={'addToTaskbox'} value ={task} onChange={e => newTask(e.target.value)} />
            <button className={'addToTask'} onClick={addToTaskList}>Add To List</button>
            <ul>
                {tasks.map((i,index) => <li key={index}>{i}

                    <button className={'remove-btn'} onClick={() => removeTask(index)}>
                        Remove
                    </button>

                </li>)}
            </ul>
        </>

    )
}
export default TaskKeeper;

