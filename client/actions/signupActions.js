/**
 * Created by meng on 2016/9/30.
 */
import axios from 'axios';

export function userSignupRequest(userData) {
	return dispatch => {
		return axios.post('/api/users', userData);
	}
}

export function isUserExists(identifier) {
	return dispatch => {
		return axios.get(`/api/users/${identifier}`);
	}
}