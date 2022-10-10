import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "application",
  initialState: [
    { id: 1, app_name: "application name", app_details: "application details" },
  ],
  reducers: {
    addApp: (state, action) => {
      const newApp = {
        id: Date.now(),
        app_name: action.payload.app_name,
        app_details: action.payload.app_details,
      };
      state.push(newApp);
    },
  },
});

export const { addApp } = appSlice.actions;

export default appSlice.reducer;
