/**
 * Created by meng on 2016/10/9.
 */
import axios from 'axios';
import setAuthorizaitonToken from '../utils/setAuthorizationToken'
import jwtDecode from 'jwt-decode';
import {
  SET_CURRENT_USER
} from './types'

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function logout(user) {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizaitonToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('/api/auth', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizaitonToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}