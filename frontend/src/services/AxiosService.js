import axios from 'axios';
import { getAuthToken } from './LocalStorageService';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = (method, url, data) => {

    const token = getAuthToken();

    let headers = {};
    if (token !== null && token !== "") {
        headers = {'Authorization': `Bearer ${token}`};
    }

    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data});
};

export const getClients = () => {
    return request('get', '/clients');
}

export const getClient = (id) => {
    return request('get', `/clients/${id}`);
}

export const saveClient = (client) => {
    return request('post', `/clients/${client.id}`, client);
}

export const deleteClient = (id) => {
    return request('delete', `/clients/${id}`);
}