import axios from 'axios';

// API url :: GitHub
const api = axios.create({
    baseURL: 'https://api.github.com',
});

export default api;