import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
    //   .addCase(fetchRegisterUser.pending, (state) => {
    //     state.loading = true;
    //   })
    //
    //   .addCase(fetchRegisterUser.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   })

    //   .addCase(fetchContacts.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.items = action.payload;
    //   })
    //   .addCase(fetchContacts.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   })

    //   .addCase(deleteContact.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     const idx = state.items.findIndex((item) => item.id === action.payload);
    //     state.items.splice(idx, 1);
    //   })
    //   .addCase(deleteContact.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   });
  },
});
export default slice.reducer;

// #2 - {
//   contacts: {
//     items: [],
//     loading: false,
//     error: null
//   },
//   filter: {
//     name: ''
//   },
//   auth: {
//     user: {
//       name: 'Joe',
//       email: 'joe@ukr.net'
//     },
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRhM2Q5ZGM0OTVlZDZlMjVmM2E0YzkiLCJpYXQiOjE3MzI5MTg2ODV9.BUQrFauiaYfZfmUTEoIa5d5a1rzigNH96SlXpAgvjtQ',
//     isLoggedIn: true,
//     isRefreshing: false
//   }
//   Jooe789
// }
