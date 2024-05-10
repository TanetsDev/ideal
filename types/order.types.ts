export interface IDeliveryInfo {
  name: string;
  lastName: string;
  phone: string;
  city: string;
  address: string;
  date: Date;
  time: string;
  deliveryMethod: string;
  paymentMethod: string;
}

export type BoxOrderSlot = {
  boxName: string;
  count: number;
};

export interface IOrder extends IDeliveryInfo {
  order: BoxOrderSlot[];
  deliveryPrice: number;
  discount: number;
  totalPrice: number;
  totalWeight: number;
  paymentrStatus: "pending" | "fullfield";
  userId?: number;
}

export type OrdersHistoryFilterPeriod = "all" | "mounth" | "halfYear" | "year";

export interface IOrdersHistory {
  limit: number;
  page: number;
  totalDocs: number;
  orders: IOrder[];
}
