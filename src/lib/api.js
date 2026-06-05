import axios from 'axios';

const api = axios.create({ 
  baseURL: 'http://localhost:5001' 
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const login = (email, password) => 
    api.post('/api/auth/login', { email, password });

export const getGoals = () => 
    api.get('/api/goals');

export const getTodayMissions = () => 
    api.get('/api/missions/today');

export const completeMission = (id) => 
    api.patch(`/api/missions/${id}/complete`);

export default api;