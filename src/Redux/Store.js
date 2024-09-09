// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import episodeReducer from "./slice/episodeSlice.js";

const store = configureStore({
  reducer: {
    data: episodeReducer,
  },
});

export default store;
