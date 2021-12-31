import http from "./http";

const getALl = () => {
  return http.get("/");
};

const getUser = (id) => {
  return http.get(`/${id}`);
};

const create = (user) => {
  return http.post("/", user);
};

const update = (id, user) => {
  return http.put(`/${id}`, user);
};

const remove = (id) => {
  return http.delete(`/${id}`);
};

const methods = {
  getALl,
  getUser,
  create,
  update,
  remove,
};
export default methods;
