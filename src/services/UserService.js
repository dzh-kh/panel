import fetch from "auth/FetchInterceptor";

const userService = {};

userService.getUserById = function (id) {
  return fetch.get(
    `/users/${id}`
    // method: "get",
  );
};

userService.getUsers = function () {
  console.log("start");
  return fetch.get("/users");
};

export default userService;
