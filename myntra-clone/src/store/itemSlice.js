import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, actions) => {
      return actions.payload;
    },
  },
});
export const itemActions = itemSlice.actions;
export default itemSlice;
