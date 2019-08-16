import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://petmanager-18d72.firebaseio.com/'
});

export default instance;