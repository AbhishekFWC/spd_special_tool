import { BASE_URL } from "../utils/config";
import axios, { AxiosError } from "axios";

// login user
export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login/finder`, {
      email,
      password,
    });
    if (res.status === 200)
      return Promise.resolve({ success: true, data: res.data });
  } catch (error: any) {
    return Promise.resolve({ success: false, data: error.response.data });
  }
};

// on reload or user visit to page check wether the user is logged in or not
export const checkLoginUser = async () => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get(`${BASE_URL}/auth/check`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) {
      return Promise.resolve({ success: true, data: res.data });
    } else throw new Error("Unable to login");
  } catch (error) {
    return Promise.resolve({ success: false, data: error });
  }
};

export const logoutUser = async () => {};
