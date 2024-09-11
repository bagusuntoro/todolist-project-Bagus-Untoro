import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchTasks = () => axios.get(`${API_URL}/list-task`);
export const createTask = (task) => axios.post(`${API_URL}/create-task`, task);
export const deleteTask = (taskId) => axios.delete(`${API_URL}/delete-task/${taskId}`);
export const updateTask = (task) => axios.put(`${API_URL}/update-task/${task.id}`, task);
