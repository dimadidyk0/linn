import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, clearToken } = profileSlice.actions;

export default profileSlice.reducer;
