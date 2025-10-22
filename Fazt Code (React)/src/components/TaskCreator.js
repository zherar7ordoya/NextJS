import { useState } from 'react';


export const TaskCreator = ({createNewTask}) => {

    const [newTaskName, setNewTaskName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        createNewTask(newTaskName);
        localStorage.setItem('task', newTaskName);
        setNewTaskName('');
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>

                <input
                    type="text"
                    placeholder="Enter a new task"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                />

                <button type="submit">Add Task</button>

            </form>
    );
}

export default TaskCreator;