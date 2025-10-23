import { TaskRow } from './TaskRow';

export const TaskTable = ({ tasks, toggleTask }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
                ))}
            </tbody>
        </table>
    );
}
export default TaskTable;