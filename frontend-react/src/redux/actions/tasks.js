import { createAction } from 'redux-actions'
import * as tasksApi from '../../api/tasks';

export const fetchTasks = createAction('fetch_tasks', () => {
  const promise = tasksApi.fetchTasks();

  return { promise };
});

export const createTask = createAction('create_task', task => {
  const promise = tasksApi.createTask({...task, status: 'pending'});

  return { promise };
});

export const updateTaskStatus = createAction('update_task_status', task => {
  const promise = tasksApi.updateTaskStatus(task);

  return { promise };
});
