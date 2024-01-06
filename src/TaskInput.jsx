// import IconCheck from './assets/icon-check.svg'
/* eslint-disable react/prop-types */
function TaskInput({ handleEnterPressed }) {

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            handleEnterPressed(e);
            e.target.value = "";
        }
    }

    return (
        <div className="taskinput">
            <div className="checkborder">
            </div>
            <input  type='text' 
                    placeholder='Create a new todo...' 
                    onKeyDown={handleKeyDown} 
                    />
        </div>
    )
}

export default TaskInput;