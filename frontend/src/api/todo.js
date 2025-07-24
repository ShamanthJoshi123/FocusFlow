import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/todo';
const USER_ID = 'user123'; // Replace this with dynamic user later

export const fetchTasks = async () => {
  const res = await axios.get(`${API_BASE}/${USER_ID}`);
  return res.data.tasks;
};

export const addTask = async (taskData) => {
  const res = await axios.post(`${API_BASE}/add`, {
    ...taskData,
    userId: USER_ID
  });
  return res.data.task;
};

export const updateTask = async (taskId, updates) => {
  const res = await axios.put(`${API_BASE}/update/${taskId}`, updates);
  return res.data.task;
};

export const deleteTask = async (taskId) => {
  await axios.delete(`${API_BASE}/delete/${taskId}`);
};

export const fetchStreak = async () => {
  const res = await axios.get(`${API_BASE}/streak/${USER_ID}`);
  return res.data.streak;
};

export const fetchProgress = async () => {
  const res = await axios.get(`${API_BASE}/progress/${USER_ID}`);
  return res.data;
};
