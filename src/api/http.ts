import Axios from 'axios';
const axios = Axios.create();

export const http = {
  get: function <Response = unknown>(url: string) {
    return axios.get<Response>(url).then(res => res.data);
  },
};
