export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTasks }) => {

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete all completed tasks?')) cleanTasks();
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setShowCompleted(e.target.checked)} /> Show Completed Tasks
            <button onClick={handleDelete}>
                Clear Completed
            </button>
        </div>
    )
}
export default VisibilityControl;