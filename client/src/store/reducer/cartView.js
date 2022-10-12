import { createSlice } from "@reduxjs/toolkit";

const cartViewState = { view: true, notification: null };
const cartViewSlice = createSlice({
  name: "cartView",
  initialState: cartViewState,
  reducers: {
    toggle(state) {
      state.view = !state.view;
    },

    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartViewAction = cartViewSlice.actions;
export default cartViewSlice.reducer;
