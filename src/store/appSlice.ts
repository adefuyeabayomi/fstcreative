import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  appState: "",
};

export const appSlice = createSlice({
  name: "appMain",
  initialState,
  reducers: {
    updateAppState: (state, action) => {
      state.appState = action.payload;
    },
  },
});

export const { updateAppState } = appSlice.actions;

export default appSlice.reducer;
