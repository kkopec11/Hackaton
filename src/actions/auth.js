import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  NEW_ACCESS_TOKEN,
  NEW_REFRESH_TOKEN,
  SET_MESSAGE,
  SET_MESSAGE_SUCCESS,
  SET_MESSAGE_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../constants/actionTypes';
import AuthService from '../services/auth/auth.service';
import {
  ADMIN_500,
  LOGIN_ERROR_401,
  REG_SUCCESS_200,
  ERROR_400,
  ERROR_REG_400,
} from '../static/message';
import { toast } from 'react-toastify';

export const login = (email, password) => dispatch => {
  return AuthService.login(email, password).then(
    data => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { profile: data },
      });
      toast.success('you have been logged in.');

      return Promise.resolve();
    },
    error => {
      // console.log(error);

      // console.log(error.response);
      // let message = 'Error';
      // if (
      //   error.response.statusText === 'Unauthorized' ||
      //   error.response.status === 401 ||
      //   error.response.data.type === 'authentication'
      // ) {
      //   message = LOGIN_ERROR_401;
      // } else {
      //   message = ADMIN_500;
      // }
      let message = LOGIN_ERROR_401;

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      toast.error(message);
      return Promise.reject();
    }
  );
};

export const logout = () => dispatch => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
  toast.warn('You have been logged out');
};

export const newAccessToken = accessToken => dispatch => {
  dispatch({
    type: NEW_ACCESS_TOKEN,
    payload: accessToken,
  });
};

export const newRefreshToken = refreshToken => dispatch => {
  dispatch({
    type: NEW_REFRESH_TOKEN,
    payload: refreshToken,
  });
};

export const register = (firstName, lastName, email, password) => dispatch => {
  return AuthService.register(firstName, email, password).then(
    response => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE_SUCCESS,
        payload: REG_SUCCESS_200,
      });

      toast.success('Your account has been successfully registered!');
      return Promise.resolve();
    },
    error => {
      // let message = 'Error';
      // if (
      //   error.response.status === 400 ||
      //   error.response.data.message === 'Email already in use'
      // ) {
      //   message = ERROR_400;
      // } else {
      //   message = ADMIN_500;
      // }
      let message = ERROR_REG_400;
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE_FAIL,
        payload: message,
      });
      toast.warn(message);
      return Promise.reject();
    }
  );
};
