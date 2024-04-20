export interface IDeliveryInfo {
  name: string;
  lastName: string;
  phone: number;
  deliveryMethod: "кур'єром" | "самовивіз";
  city: string;
  address: string;
  date: Date;
  time: string;
  paymentMethod: "кур'єру" | "онлайн";
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
