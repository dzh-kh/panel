import {
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
} from "../constants/User";

export const fetchUsers = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersError = (error) => ({
  type: FETCH_USERS_ERROR,
  payload: error,
});

export const fetchUser = (id) => ({
  type: FETCH_USER_REQUEST,
  payload: id,
});

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserError = (error) => ({
  type: FETCH_USER_ERROR,
  payload: error,
});
