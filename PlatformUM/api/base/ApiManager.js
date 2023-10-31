import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

const baseUrl = `http://${process.env.EXPO_PUBLIC_SERVER_IP}:${process.env.EXPO_PUBLIC_SERVER_PORT}`;

class ApiManager {

  constructor() {
    this.request = axios.create({
      baseURL: baseUrl,
    });

    this.updateToken();

  }

  getAll(url) {
    return this.request.get(url);
  }

  get(id, url) {
    return this.request.get(`${url}/${id}`);
  }

  getByUsername(username, url) {
    return this.request.get(`${url}/username/${username}`);
  }

  post(data, url) {
    return this.request.post(url, data);
  }

  postWithoutToken(data, url) {
    this.removeAutorization();
    const request = this.request.post(url, data);
    this.updateToken();
    return request;
  }

  put(id, data, url) {
    return this.request.put(`${url}/${id}`, data);
  }

  delete(id, url) {
    return this.request.delete(`${url}/${id}`);
  }

  updateToken() {
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

  removeAutorization(){
    this.request.interceptors.request.use(
      async (config) => {
        delete config.headers.Authorization;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  searchTrip(data) {
    return this.request.get(`${data}`);
  }

  todaysTrips(data) {
    return this.request.get(`${data}`);
  }

  
}

export default ApiManager;