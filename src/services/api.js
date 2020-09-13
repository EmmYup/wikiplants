import axios from 'axios';

const API_URL = 'https://trefle.io/api/v1/';
const token = process.env.TOKEN;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.authorization = `Bearer ${token}`;

const { get } = axios;

export default {
  plants: {
    list: () => get(`/plants`),
  },
};
