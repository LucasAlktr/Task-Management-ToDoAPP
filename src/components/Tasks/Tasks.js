import Task from './Task/Task'

export default function Tasks({tasks,onStatusChange, onTaskRemove, onClearTasks}) {

    return (
        <>
            <h2>These are the tasks:</h2>
            {tasks.map(
                (task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onStatusChange={onStatusChange}
                        onTaskRemove={onTaskRemove}
                    />
                )
            )}
            <hr />
            <button onClick={onClearTasks}>Clear Tasks</button>
        </>
    );
}