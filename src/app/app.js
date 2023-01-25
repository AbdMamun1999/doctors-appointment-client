import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
