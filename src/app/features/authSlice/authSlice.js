import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: sessionStorage.getItem("auth")
    ? JSON.parse(sessionStorage.getItem("auth"))
    : [],
  userInfo: sessionStorage.getItem("userInfo")
    ? JSON.parse(sessionStorage.getItem("userInfo"))
    : [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: {
      reducer(state, action) {
        state.auth = action?.payload;
        sessionStorage.setItem("auth", JSON.stringify(action.payload));
      },
    },
    userInfo: {
      reducer(state, action) {
        state.userInfo = action?.payload;
        sessionStorage.setItem("userInfo", JSON.stringify(action.payload));
      },
    },
  },
});

export const { auth } = authSlice.actions;
export const registerDetails = (state) => state?.auth?.auth;
export default authSlice.reducer;
