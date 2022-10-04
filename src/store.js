import { configureStore, createSlice } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    userLogin: (state, action) => action.payload,
    userLogout: (state, action) => null,
  },
});

export const { userLogin, userLogout } = userSlice.actions;

const option = {
  states: ["user"],
};

/* const modeSlice = createSlice({
  name: "mode",
  initialState: "dia",
  reducers: {
    modeToggle: (state, action) => (state === "dia" ? "noche" : "dia"),
  },
});

export const { modeToggle } = modeSlice.actions; */

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    //mode: modeSlice.reducer,
  },
  preloadedState: load(option),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(save(option)),
});

export default store;
