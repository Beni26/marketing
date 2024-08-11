import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenCartDrawer: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setIsOpenCartDrawer: (state, action) => {
      state.isOpenCartDrawer = action.payload;
    },
  },
});

export const { setIsOpenCartDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;