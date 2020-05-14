import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '../redux/actions';
import './TaskItem.css';

const transitions = {
    pending: 'Move to PROGRESS',
    progress: 'Move to DONE',
    done: 'Nothing to do here...',
}

const TaskItem = task => {
    const dispatch = useDispatch();
    const [isShown, setIsShown] = useState(false);

    const {
        id,
        title,
        description,
        status,
    } = task;
 
    return <div className={`task task-${status}`} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        {isShown && (
            <div className="task-description">
                {description}
            </div>
        )}
        <div>
            {title} ({status})
        </div>
        <div className="task-actions">
            <button className="task-cta" disabled={status === 'done'} onClick={() => dispatch(updateTaskStatus(task))}>{transitions[status]}</button>
        </div>
    </div>;
};

export {
    TaskItem,
};