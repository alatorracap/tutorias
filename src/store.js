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
<<<<<<< HEAD

/* const modeSlice = createSlice({
  name: "mode",
  initialState: "dia",
  reducers: {
    modeToggle: (state, action) => (state === "dia" ? "noche" : "dia"),
=======
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
>>>>>>> f3670bfd32f586424c78429e4ccb83fb8165586e
  },
  preloadedState: load(option),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(save(option)),
});
<<<<<<< HEAD

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

=======
>>>>>>> f3670bfd32f586424c78429e4ccb83fb8165586e
export default store;
