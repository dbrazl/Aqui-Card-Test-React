import axios from 'axios';

const api = axios.create({
  baseURL:
    'http://aquicardteste-env.mtwem9upcz.us-east-1.elasticbeanstalk.com/:80',
});

export default api;
