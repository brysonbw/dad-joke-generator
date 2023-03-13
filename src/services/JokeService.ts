import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_DAD_JOKE_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getJoke() {
    return apiClient.get('');
  },
};
