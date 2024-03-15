import { createSlice } from "@reduxjs/toolkit";

const userdata = createSlice({
  name: "userdata",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
  },
});
export const { addItem, removeItem} = userdata.actions;

export default userdata.reducer;