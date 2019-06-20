
import axiosWithAuth from "../api/AxiosWithAuth";
import endpoint from '../api'
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const SUCCESS_FRIENDS = "SUCCESS_FRIENDS";
export const FAILURE_FRIENDS = "FAILURE_FRIENDS";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const Login = creds => dispatch => {
  dispatch({ type: LOGIN_START});
  return axiosWithAuth()
  .post(`${endpoint}/login`, creds)
  .then( res => {
    localStorage.setItem('token', res.data.payload)
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload})
    fetchFriends();
  })
}

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS});
  axiosWithAuth().get(`${endpoint}/friends`)
  .then(res => {
    dispatch({ type: SUCCESS_FRIENDS, payload: res.data });
  })
  .catch(err => {
    dispatch({ type: FAILURE_FRIENDS});
  })
}
