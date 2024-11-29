import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://connections-api.goit.global";

import toast from "react-hot-toast";

export const register = createAsyncThunk(
  "auth/register ",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post("/users/signup", data);
      toast.success("Congratulations!!!");
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
      toast.success(`Welcome !!! ${result.data.user.name}`);
      return result.data;
    } catch (response) {
      return rejectWithValue(response.message);
    }
  }
);
