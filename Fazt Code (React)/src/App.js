import './App.css';
import TaskCreator from './components/TaskCreator';
import { useState } from 'react';


function App() {

    const [taskItems, setTasksItems] = useState([
        { name: 'Sample Task', done: false },
        { name: 'Another Task', done: true },
        { name: 'Third Task', done: false }
    ]);

    function createNewTask(taskName){
        if (!taskItems.find(t => t.name === taskName)){
        setTasksItems([...taskItems, {name: taskName, done: false}]);
        }
    }

    return (
        <div className="App">

            <TaskCreator createNewTask={createNewTask} />

            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {taskItems.map(task => (
                        <tr key={task.name}>
                            <td>{task.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>



            {
                taskItems.map((task, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => {
                                const newTasks = [...taskItems];
                                newTasks[index].done = !newTasks[index].done;
                                setTasksItems(newTasks);
                            }}
                        />
                        <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                            {task.name}
                        </span>
                    </div>
                ))}
        </div>
    );
}

export default App;
