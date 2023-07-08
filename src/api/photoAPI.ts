import {http} from './http';

const baseURL = 'https://jsonplaceholder.typicode.com/photos';
const limit = 10;

export const photoAPI = {
  get: function (page: number) {
    return http.get(`${baseURL}?_start=${page * limit}&_limit=${limit}`);
  },
};
