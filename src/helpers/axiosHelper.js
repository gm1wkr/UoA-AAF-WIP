import axios from 'axios';

// Create an axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default axiosInstance;