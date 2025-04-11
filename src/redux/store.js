import { configureStore } from "@reduxjs/toolkit";
import contactSliceReducer from "./contacts/slice.js";
import filtersSliceReducer from "./filters/slice.js";
import authReducer from "./auth/slice.js";

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filters: filtersSliceReducer,
    auth: authReducer,
  },
});
