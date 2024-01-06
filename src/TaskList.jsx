/* eslint-disable react/prop-types */
import CrossIcon from './assets/icon-cross.svg';
import CheckIcon from './assets/icon-check.svg';
import { useEffect, useState } from 'react';

function TaskList({ todos, handleTaskClick, handleClearCompleted, handleClearTask, handleOnDrop }) {

    const [filterType, setFilterType] = useState("All");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const filtered = todos.filter((todo) => {
            if (filterType === "All") {
                return true;
            } else if (filterType === "Active") {
                return !todo.complete;
            } else {
                return todo.complete;
            }
        })
        setFilteredTodos(filtered);
    }, [filterType, todos])
    
    function handleDragStart(e, index) {
        e.dataTransfer.clearData;
        e.dataTransfer.setData("text/plain", index);
    }

    return(
        <div className="taskitems">
            {filteredTodos.map((todo, index) => {
                return(
                <div draggable
                    onDragStart={(e) => {handleDragStart(e, index)}}
                    onDragOver={(e) => {e.preventDefault();}}
                    onDrop={(e) => {handleOnDrop(e, index);}}
                    key={index} 
                    className={todo.complete === true ? 'task complete' : 'task'}>
                    <div className="checkborder" onClick={() => handleTaskClick(index)}>
                        <img src={CheckIcon} alt='check'/>
                    </div>
                    <p onClick={() => handleTaskClick(index)}>{todo.description}</p>
                    <div className="cross">
                        <img src={CrossIcon} alt='cross' onClick={() => {handleClearTask(index)}}/>
                    </div>
                </div>)
            })}
            <div className="tasksinfo">
                <p>{todos.length} items left</p>
                <div className="center-tasksinfo">
                    <p  onClick={() => {setFilterType("All"); console.log("pressed")}}
                        className={filterType === "All" ? 'active' : ''}>
                        All</p>
                    <p  onClick={() => {setFilterType("Active"); console.log("pressed")}}
                        className={filterType === "Active" ? 'active' : ''}>
                        Active</p>
                    <p  onClick={() => {setFilterType("Completed"); console.log("pressed")}}
                        className={filterType === "Completed" ? 'active' : ''}>
                        Completed</p>
                </div>
                <p className='cleartasks' onClick={handleClearCompleted}>Clear Completed</p>
            </div>
        </div>

    )
}

export default TaskList;