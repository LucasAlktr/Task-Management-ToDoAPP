import React from "react";
import "../task.scss";

export default function Task(props) {

    const handleStatusClick = () => {
        const id = props.task.id;
        props.onStatusChange(id);
    }

    const handleRemoveClick = () => {
        const id = props.task.id;
        props.onTaskRemove(id);
    }

    return (
        <div className="task">
            <hr />
            <h3>{props.task.description}</h3>
            <div>Id: {props.task.id}</div>
            <div>
                Status: {props.task.done
                    ? 'Completed'
                    : 'Open'}
            </div>
            <div className="col-button">
                <button className="button-action" onClick={handleStatusClick}>Change Status</button>
                <button className="button-action" onClick={handleRemoveClick}>Remove Task</button>
            </div>
        </div>
    );

}
