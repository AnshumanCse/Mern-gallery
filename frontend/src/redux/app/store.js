import { configureStore } from "@reduxjs/toolkit";
import gallerSlice from "../features/gallerSlice";

export const store = configureStore({
  reducer: {
    gallery: gallerSlice,
  },
});
