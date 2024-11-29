import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://66b1506f1ca8ad33d4f3e458.mockapi.io/contacts";

import isDuplicated from "../../utils/isDuplicated";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/");
      return data;
    } catch (response) {
      return thunkAPI.rejectWithValue(response.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post("/", data);
      return result.data;
    } catch (response) {
      return rejectWithValue(response.message);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const duplicate = isDuplicated(contacts.items, data.name, data.number);
      if (duplicate) {
        toast(
          `You already have ${duplicate.name} with number ${duplicate.number} in your contacts list. Please check and try again!`
        );
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/${id}`);
      return id;
    } catch (response) {
      return rejectWithValue(response.message);
    }
  }
);

/*USAGE WITHOUT createAsyncThunk
import {
  fetchError,
  fetchInProgress,
  fetchSuccess,
  fetchAddInProgress,
  fetchAddSuccess,
  fetchAddError,
  fetchDeleteInProgress,
  fetchDeleteSuccess,
  fetchDeleteError,
} from "./slice";
 
export const fetchContacts = () => async (dispatch) => {
  try {
    dispatch(fetchInProgress());

    const { data } = await axios.get("/");
    dispatch(fetchSuccess(data));
  } catch (response) {
    console.dir(response.message);
    dispatch(fetchError(response.message));
  }
};

export const addContact = (data) => async (dispatch, getState) => {
  try {
    const { contacts } = getState();
    const duplicate = isDuplicated(contacts.items, data.name, data.number);
    if (duplicate) {
      return toast(
        `You already have ${duplicate.name} with number ${duplicate.number} in your contacts list. Please check and try again!`
      );
    }
    dispatch(fetchAddInProgress());
    const result = await axios.post("/", data);

    dispatch(fetchAddSuccess(result.data));
  } catch (response) {
    console.dir(response.message);
    dispatch(fetchAddError(response.message));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    dispatch(fetchDeleteInProgress());

    await axios.delete(`/${id}`);
    dispatch(fetchDeleteSuccess(id));
  } catch (response) {
    console.dir(response.message);
    dispatch(fetchDeleteError(response.message));
  }
};
*/

// Оголоси наступні операції:

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену це рядок "contacts/fetchAll".
// addContact - додавання нового контакту (метод POST). Базовий тип екшену це рядок "contacts/addContact".
// deleteContact - видалення контакту по ID (метод DELETE). Базовий тип екшену це рядок "contacts/deleteContact".
