import { handleServerRes } from "./api";
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://wtwr1.crabdance.com/"
    : "http://localhost:3001";

const register = ({ email, password, name, avatar }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
      avatar,
    }),
  }).then(handleServerRes);
};

const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(handleServerRes)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data.token;
      }
    });
};

const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerRes);
};

const auth = {
  register,
  login,
  checkToken,
};

export default auth;
