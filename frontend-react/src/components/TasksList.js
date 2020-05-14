import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/actions';
import { TaskItem } from './TaskItem';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.data);

    useEffect(async () => dispatch(fetchTasks()), []);

    return tasks.map(task => <TaskItem {...task} />);
};

export {
    TaskList,
};