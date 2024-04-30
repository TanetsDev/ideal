import { combineReducers, configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { boxesApi } from "./boxes/boxesApi";
import boxesReducer from "./boxes/boxesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["boxes"],
};

const persistedReducer = persistReducer(persistConfig, boxesReducer);

const rootReducer = combineReducers({
  boxes: persistedReducer,
  [boxesApi.reducerPath]: boxesApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(boxesApi.middleware),
});

export const persistor = persistStore(store);

export default store;
