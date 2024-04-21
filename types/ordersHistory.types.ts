import { Orders } from "@prisma/client";

export type OrdetDetails = {
  boxId: string;
  boxAmount: number;
};

export interface IOrdersHistory extends Omit<Orders, "orderDetails"> {
  orderDetails: OrdetDetails[];
}
