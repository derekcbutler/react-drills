import React from 'react';

function NewTask(props) {
    console.log(props)
    return(
        <div>
            <div>
                <input value={props.input} onChange={(e) => props.handleOnChange(e.target.value)} />
                <button onClick={() => props.handleAddTask()}>submit</button>
            </div>
        </div>
    )
}
export default NewTask;
