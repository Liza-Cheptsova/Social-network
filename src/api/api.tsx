import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-Key": "94c9f385-f2db-498c-b99f-a10b7cce6547",
  },
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  unFollow(id: number) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response;
    });
  },

  follow(id: number) {
    return instance.post(`follow/${id}`, {}).then((response) => {
      return response;
    });
  },
};