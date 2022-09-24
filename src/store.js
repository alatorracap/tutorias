import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    userLogin: (state, action) => action.payload,
    userLogout: (state, action) => null,
  },
});

export const { userLogin, userLogout } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});


export default store;
