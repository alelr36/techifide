import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { fetchTasks } from '../redux/actions';
import { TaskItem } from './TaskItem';

const TasksList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.data);

    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchTasks());
        }
        fetchData();
    });

    return (
        <Grid container justify="center" spacing={5}>
            {tasks.map(task => <TaskItem key={task.id} {...task} />)}
        </Grid>
    );
};

export {
    TasksList,
};