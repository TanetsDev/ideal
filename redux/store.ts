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

import instaSlice from "./insta/instaSlice";

import { bannerAPi } from "./banner/bannerAPi";
import bannerSlice from "./banner/bannerSlice";

import persisteAuthReducer from "./auth/authSlice";
import { authApi } from "./auth/authApi";
import cartReducer from "./cartSlice/cartSlice";

import persistedOrdersReducer from "./orders/ordersSlice";
import { ordersApi } from "./orders/ordersApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["boxes", "insta", "banner", "orders", "cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,

  auth: persisteAuthReducer,
  [authApi.reducerPath]: authApi.reducer,

  banner: bannerSlice,
  [boxesApi.reducerPath]: boxesApi.reducer,

  boxes: boxesSlice,
  [bannerAPi.reducerPath]: bannerAPi.reducer,

  insta: instaSlice,
  [instaApi.reducerPath]: instaApi.reducer,

  orders: persistedOrdersReducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
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
      authApi.middleware,
      ordersApi.middleware
    ),
});

export const persistor = persistStore(store);

export default store;
