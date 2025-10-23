import './App.css';
import TaskCreator from './components/TaskCreator';
import TaskTable from './components/TaskTable';
import { useState, useEffect, use } from 'react';


function App() {

    const [taskItems, setTasksItems] = useState([]);

    function createNewTask(taskName) {
        if (!taskItems.find(t => t.name === taskName)) {
            setTasksItems([...taskItems, { name: taskName, done: false }]);
        }
    }

    const toggleTask = task => {
        setTasksItems(
            taskItems.map(x => (x.name === task.name ? { ...x, done: !x.done } : x))
        );
    }

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) setTasksItems(JSON.parse(storedTasks));
        console.log('Component mounted, tasks loaded from localStorage');
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskItems));
    }, [taskItems]);


    return (
        <div className="App">
            <TaskCreator createNewTask={createNewTask} />
            <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        </div>
    );
}

export default App;
