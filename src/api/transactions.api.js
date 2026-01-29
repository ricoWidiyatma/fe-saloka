import api from "./axios";

export const getTransactions = (page = 1) => {
  return api.get(`/transactions?page=${page}`);
};
