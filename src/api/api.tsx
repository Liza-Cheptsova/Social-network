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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },

  unFollow(userId: number) {
    return instance.delete(`follow/${userId}`, {}).then((response) => {
      return response;
    });
  },

  follow(userId: number) {
    return instance.post(`follow/${userId}`, {}).then((response) => {
      return response;
    });
  },
};

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`).then((res) => res);
  },

  logIn(email: string, password: string, rememberMe: boolean = false) {
    return instance.post(`auth/login`, { email, password, rememberMe }).then((res) => {
      return res.data;
    });
  },

  logOut() {
    return instance.delete(`auth/login`).then((res) => {
      return res.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },

  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },

  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status }).then((response) => {
      return response.data;
    });
  },
};
