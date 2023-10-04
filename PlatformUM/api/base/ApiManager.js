import axios from 'axios';
import { serverIpAddress, serverPort } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

const baseUrl = `http://${serverIpAddress}:${serverPort}`;

class ApiManager {
  constructor(url) {
    this.url = url;
    this.baseUrl = baseUrl;
    this.request = axios.create({
      baseURL: this.baseUrl,
    });

    this.request.interceptors.request.use(
      async (config) => {
        const jwtToken = await AsyncStorage.getItem('jwtToken');
        if (jwtToken) {
          config.headers.Authorization = `Bearer ${jwtToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  getAll() {
    return this.request.get(this.url);
  }

  get(id) {
    return this.request.get(`${this.url}/${id}`);
  }

  post(data) {
    return this.request.post(this.url, data);
  }

  put(id, data) {
    return this.request.put(`${this.url}/${id}`, data);
  }

  delete(id) {
    return this.request.delete(`${this.url}/${id}`);
  }
}

export default ApiManager;