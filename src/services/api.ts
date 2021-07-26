import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vixdev-backend.herokuapp.com/',
});

export default api;
