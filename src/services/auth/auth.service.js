import axios from 'axios';
import { SERVER_API } from '../../static/API';
import TokenService from './token.service';
import apiInstance from '../auth/apiInstance';

const API_URL = 'identity';

const login = (email, password) => {
  return axios
    .post(SERVER_API + 'users/login', {
      email,
      password,
    })
    .then(response => {
      if (response.data.accessToken) {
        TokenService.setProfile(response.data);
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('profile');
};

const register = (name, email, password) => {
  return apiInstance.post(SERVER_API + 'users', {
    name,
    email,
    password,
  });
};

export default {
  login,
  logout,
  register,
};
