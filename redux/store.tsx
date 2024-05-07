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
import boxesSlice from "./boxes/boxesSlice";
import { instaApi } from "./insta/instaApi";
// import instaSlice from "./insta/instaSlice";
import { bannerAPi } from "./banner/bannerAPi";
// import bannerSlice from "./banner/bannerSlice";
import persisteAuthReducer from "./auth/authSlice";
import { authApi } from "./auth/authApi";
import cartReducer from "./cartSlice/cartSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["boxes", "cart"],
};

const rootReducer = combineReducers({
  auth: persisteAuthReducer,
  cart: cartReducer,
  boxes: boxesSlice,
  [authApi.reducerPath]: authApi.reducer,

  [boxesApi.reducerPath]: boxesApi.reducer,
  [bannerAPi.reducerPath]: bannerAPi.reducer,
  [instaApi.reducerPath]: instaApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      boxesApi.middleware,
      instaApi.middleware,
      bannerAPi.middleware,
      authApi.middleware
    ),
});

export const persistor = persistStore(store);

export default store;
