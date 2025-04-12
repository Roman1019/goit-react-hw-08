import { configureStore } from "@reduxjs/toolkit";
import contactSliceReducer from "./contacts/slice.js";
import filtersSliceReducer from "./filters/slice.js";
import authReducer from "./auth/slice.js";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistedAuthReducer = persistReducer(
  {
    key: "user-token",
    storage,
    whitelist: ["token"],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filters: filtersSliceReducer,
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);
