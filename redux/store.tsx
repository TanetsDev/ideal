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
import boxesSlice from "./boxes/boxesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["boxes"],
};

const rootReducer = combineReducers({
  boxes: boxesSlice,
  [boxesApi.reducerPath]: boxesApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(boxesApi.middleware),
});

export const persistor = persistStore(store);

export default store;
