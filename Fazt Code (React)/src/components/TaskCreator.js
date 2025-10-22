import { useState } from 'react';


export const TaskCreator = () => {

    const [newTask, setNewTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        localStorage.setItem('task', newTask);
        setNewTask('');
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>

                <input
                    type="text"
                    placeholder="Enter a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />

                <button type="submit">Add Task</button>

            </form>
    );
}

export default TaskCreator;