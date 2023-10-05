const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr1.crabdance.com"
    : "http://localhost:3001";

console.log(baseUrl);

export const handleServerRes = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleServerRes);
};

const addItem = ({ name, weather, imageUrl }) => {
  const token = localStorage.getItem("token");
  console.log();
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(handleServerRes);
};

const deleteItem = (id) => {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerRes);
};

const editUser = (data) => {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: data.name,
      avatar: data.avatar,
    }),
  }).then(handleServerRes);
};

const likeItem = (itemId) => {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerRes);
};

const dislikeItem = (itemId) => {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerRes);
};

const api = {
  getItems,
  addItem,
  deleteItem,
  editUser,
  likeItem,
  dislikeItem,
};

export default api;
