import { createSlice } from "@reduxjs/toolkit";

const authState = { isAuth: false, email: "" };
const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.email = action.payload;
    },

    logOut(state) {
      state.isAuth = false;
      state.email = "";
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
//전체다 export하지않고 reducer만
