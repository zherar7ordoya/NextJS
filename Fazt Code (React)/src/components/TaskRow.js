export const TaskRow = ({ task, toggleTask }) => {
    return (
        <tr key={task.name}>
            <td 
            style={{ textDecoration: task.done ? 'line-through' : 'none' }}
            className='d-flex justify-content-between'
            >
                {task.name}
                </td>
            <td>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => {toggleTask(task)}}
                />
            </td>
        </tr>
    );
}

export default TaskRow;