import './App.css';
import TaskCreator from './components/TaskCreator';
import TaskTable from './components/TaskTable';
import { useState, useEffect } from 'react';
import VisibilityControl from './components/VisibilityControl';
import Container from './components/Container';

function App() {
    const [taskItems, setTasksItems] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);

    function createNewTask(taskName) {
        if (!taskItems.find((t) => t.name === taskName)) {
            setTasksItems([...taskItems, { name: taskName, done: false }]);
        }
    }

    const toggleTask = (task) => {
        setTasksItems(
            taskItems.map((x) =>
                x.name === task.name ? { ...x, done: !x.done } : x
            )
        );
    };

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) setTasksItems(JSON.parse(storedTasks));
        console.log('Component mounted, tasks loaded from localStorage');
    }, []);

    const cleanTasks = () => {
        setTasksItems(taskItems.filter((task) => !task.done));
        setShowCompleted(false);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskItems));
    }, [taskItems]);

    return (
        <main className="bg-dark vh-100 text-white">
            <Container>
                <TaskCreator createNewTask={createNewTask} />
                <TaskTable tasks={taskItems} toggleTask={toggleTask} />
                <VisibilityControl
                    isChecked={showCompleted}
                    setShowCompleted={(checked) => setShowCompleted(checked)}
                    cleanTasks={cleanTasks}
                />
                {showCompleted === true && (
                    <TaskTable
                        tasks={taskItems}
                        toggleTask={toggleTask}
                        showCompleted={showCompleted}
                    />
                )}
            </Container>
        </main>
    );
}

export default App;
