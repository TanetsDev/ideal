import { IOrdersHistory } from "@/types/order.types";
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { ordersApi } from "./ordersApi";

interface OrdersState {
  data: IOrdersHistory | null;
}

const initialState: OrdersState = {
  data: null,
};

const ordersPersistConfig = {
  key: "orders",
  storage,
  whitelist: ["data"],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ordersApi.endpoints.create.matchFulfilled,
        (state, { payload }) => {
          state.data = payload;
        }
      )
      .addMatcher(
        ordersApi.endpoints.getByUser.matchFulfilled,
        (state, { payload }) => {
          state.data = payload;
        }
      );
  },
});

const persistedOrdersReducer = persistReducer(
  ordersPersistConfig,
  ordersSlice.reducer
);

export default persistedOrdersReducer;
