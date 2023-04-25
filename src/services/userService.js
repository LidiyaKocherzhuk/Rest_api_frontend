import axios from 'axios';

const baseURL = 'http://localhost:3333/';
export const axiosApi = axios.create({baseURL});

export const userService = {
    getAll: () => axiosApi.get('users').then(),
    getById: (userId) => axiosApi.get(`users/${userId}/friends`).then(),
    getMaxFollowing: () => axiosApi.get('users/max-following').then(),
    getNotFollowing: () => axiosApi.get('users/not-following').then(),
}
