import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/search/repositories',
});

export default api;
