import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ec2-3-81-172-109.compute-1.amazonaws.com:80',
});

export default api;
