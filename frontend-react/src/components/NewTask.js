import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/actions';

const NewTask = () => {
    const dispatch = useDispatch();
    const [isCreating, setIsCreating] = useState(false);
    const [input, setInput] = useState({});

    const handleInputChange = e => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createTask(input));
        setIsCreating(false);
    };
    
    return (
        isCreating
        ? <div>
            <form onSubmit={handleSubmit}>
                <input required type="text" placeholder="Title" name="title" onChange={handleInputChange} />
                <input required type="text" placeholder="Description" name="description" onChange={handleInputChange} />
                <input type="submit" value="Create" />
                <button onClick={() => setIsCreating(false)}>Cancel</button>
            </form>
        </div>
        : <button onClick={() => setIsCreating(true)}>New Task</button>
    );
};

export {
    NewTask,
};