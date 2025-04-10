import { configureStore } from "@reduxjs/toolkit";
import contactSliceReducer from "./contactsSlice.js";
import filtersSliceReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filters: filtersSliceReducer,
  },
});
