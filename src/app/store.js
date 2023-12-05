import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../feature/auth/authSlice";
import apiSlice from "../feature/api/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
