import axios from 'axios';
import { serverIpAddress, serverPort } from '../../config';

const baseUrl = `http://${serverIpAddress}:${serverPort}/`;
const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
};

class ApiManager {
    constructor(url) {
        this.url = url;
        this.baseUrl = baseUrl;
        this.request = axios.create({
            baseURL: this.baseUrl,
            headers: headers,
        });
    }

    getAll() {
        return this.request.get(this.url);
    }

    get(id) {
        return this.request.get({url: this.url + '/' + id});
    }

    post(data) {
        return this.request.post(this.url, data);
    }

    put(id, data) {
        return this.request.put({url: this.url + '/' + id, data: data});
    }

    delete(id) {
        return this.request.delete({url: this.url + '/' + id});
    }
}

export default ApiManager;