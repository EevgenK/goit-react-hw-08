import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register ",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post("/users/signup", data);
      toast.success("Congratulations!!!");
      setAuthHeader(result.data.token);
      return result.data;
    } catch (response) {
      return rejectWithValue(response.message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login ",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post("/users/login", data);
      toast.success(`Welcome, ${result.data.user.name}!`);
      setAuthHeader(result.data.token);
      return result.data;
    } catch (response) {
      return rejectWithValue(response.message);
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      clearAuthHeader();
      toast.success("You`ve been successfully logged out");
    } catch (response) {
      return rejectWithValue(response.message);
    }
  }
);
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    const localUserToken = getState().auth.token;
    if (!localUserToken) return rejectWithValue("no token");
    setAuthHeader(localUserToken);
    try {
      const result = await axios.get("/users/current");
      return result.data;
    } catch (response) {
      return rejectWithValue(response.message);
    }
  }
);
