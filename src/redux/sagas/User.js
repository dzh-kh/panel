import userService from "services/UserService";
import {
  fetchUsersSuccess,
  fetchUsersError,
  fetchUserSuccess,
  fetchUserError,
} from "redux/actions/User";
import { FETCH_USERS_REQUEST, FETCH_USER_REQUEST } from "redux/constants/User";
import { call, put, takeEvery } from "redux-saga/effects";
import { delay } from "redux-saga/effects";

export function* fetchUser(action) {
  try {
    const data = yield call(userService.getUserById, action.payload);
    yield delay(500);
    yield put(fetchUserSuccess(data));
  } catch (e) {
    yield put(fetchUserError(e.message));
  }
}

export function* fetchUsers() {
  try {
    const data = yield call(userService.getUsers);
    console.log(data);
    yield delay(500);
    yield put(fetchUsersSuccess(data));
  } catch (e) {
    yield put(fetchUsersError(e.message));
  }
}

export default function* userSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
  yield takeEvery(FETCH_USER_REQUEST, fetchUser);
}
