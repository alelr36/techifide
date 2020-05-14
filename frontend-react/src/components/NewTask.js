import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid, TextField } from '@material-ui/core';
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
        <Grid container justify="center" spacing={4}>
            <Grid item>
                {
                    isCreating
                    ? <form onSubmit={handleSubmit}>
                        <TextField required variant="outlined" label="Title" name="title" onChange={handleInputChange} />
                        <TextField required variant="outlined" label="Description" name="description" onChange={handleInputChange} />
                        <Button variant="contained" color="secondary" onClick={() => setIsCreating(false)}>Cancel</Button>
                        <Button variant="contained" color="primary" type="submit">Create</Button>
                    </form>
                    : <Button variant="contained" color="primary" onClick={() => setIsCreating(true)}>New Task</Button>
                }
            </Grid>
        </Grid>
    );
};

export {
    NewTask,
};