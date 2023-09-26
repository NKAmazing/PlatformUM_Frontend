import axios from 'axios';

const ApiManager = axios.create({
    baseURL: 'http://localhost:9000/api/v1',
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager;