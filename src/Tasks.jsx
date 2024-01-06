import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { useState } from 'react';

function Tasks() {

    const [todos, setTodos] = useState([]);

    function handleEnterPressed(e) {
        let newTodo = {description: e.target.value, complete: false};
        setTodos([...todos, newTodo]);
    }

    function handleTaskClick(index) {
        const updatedTodos = [...todos];
        updatedTodos[index] = {...updatedTodos[index], complete: true}
        setTodos(updatedTodos);
    }

    function handleClearCompleted() {
        const tempTodos = [...todos];
        const filtered = tempTodos.filter((todo) => {return !todo.complete})
        setTodos(filtered);
    }

    function handleClearTask(index) {
        const tempTodos = [...todos];
        tempTodos.splice(index, 1);
        setTodos(tempTodos);
    }

    function handleOnDrop(e, index) {
        e.preventDefault();
        const draggedIndex = e.dataTransfer.getData("text/plain");
        const tempTodos = [...todos];
        const draggedItem = tempTodos[draggedIndex];
        tempTodos.splice(index > draggedIndex ? +index + +1 : index, 0, draggedItem);
        tempTodos.splice(index < draggedIndex ? +draggedIndex + +1 : draggedIndex, 1);
        setTodos(tempTodos);
    }

    return(
        <>
            <TaskInput handleEnterPressed={handleEnterPressed} />
            <TaskList   todos={todos} 
                        handleTaskClick={handleTaskClick} 
                        handleClearCompleted={handleClearCompleted}
                        handleClearTask={handleClearTask}
                        handleOnDrop={handleOnDrop}/>
            <p>Drag and drop to reorder list</p>
        </>
    )
}

export default Tasks;