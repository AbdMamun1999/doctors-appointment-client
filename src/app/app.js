import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
