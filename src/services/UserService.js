import fetch from "auth/FetchInterceptor";

const userService = {};

userService.getUserById = function (id) {
  return fetch.get(`/users/${id}`);
};

userService.getUsers = function () {
  return fetch.get("/users");
};

export default userService;
