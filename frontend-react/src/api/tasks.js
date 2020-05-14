import axios from 'axios';
import qs from 'qs';

export const fetchTasks = () => axios.get('http://localhost:8000/tasks');

export const createTask = task => axios.post('http://localhost:8000/tasks', qs.stringify(task));  

export const updateTaskStatus = task => axios.post(`http://localhost:8000/tasks/${task.id}/status`, qs.stringify(task));