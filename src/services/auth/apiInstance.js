import axios from 'axios';
import { SERVER_API } from '../../static/API';

const instance = axios.create({
  baseURL: SERVER_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
