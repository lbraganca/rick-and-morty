import axios from "axios";

const host = process.env.REACT_APP_SERVER_HOST;

export const getAll = async (resource) => {
  return await axios.get(`${host}/${resource}`);
};

export const get = async (resource, id) => {
  return await axios.get(`${host}/${resource}/${id}`);
};

export const getWhere = async (resource, params) => {
  return await axios.get(`${host}/${resource}`, { params });
};
