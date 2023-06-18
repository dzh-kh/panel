import {
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
} from "../constants/User";

const initialState = {
  users: [],
  currentUser: null,
  error: "",
  isLoading: true,
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case FETCH_USERS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case FETCH_USER_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };
    case FETCH_USER_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default: {
      return state;
    }
  }
};

export default User;
