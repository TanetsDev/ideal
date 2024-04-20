import prisma from "@/config/prisma";
import TelegramBotService from "@/services/TelegramBot.service";
import { IOrder, OrdersHistoryFilterPeriod } from "@/types/order.types";

class OrderController {
  constructor() {}

  private generateOrdersFilter = (option: OrdersHistoryFilterPeriod) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1);
    const lastSixMonthsDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 5,
      1
    );
    const lastYearDate = new Date(
      currentDate.getFullYear() - 1,
      currentDate.getMonth(),
      currentDate.getDate()
    );

    switch (option) {
      case "mounth":
        return {
          gte: firstDayOfMonth.toISOString(),
        };
      case "halfYear":
        return {
          gte: lastSixMonthsDate.toISOString(),
        };
      case "year":
        return {
          gte: lastYearDate.toISOString(),
        };
      default:
        return undefined;
    }
  };

  public createOrderExternal = async (data: IOrder) => {
    try {
      const tgRes = await TelegramBotService.sendMessage(data, "order");
      if (tgRes.ok) {
        throw new Error("Something went wrong, please try again");
      }
      return tgRes;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public createOrderExisted = async (data: IOrder) => {
    try {
      const tgRes = await TelegramBotService.sendMessage(data, "order");
      if (tgRes.ok) {
        throw new Error("Something went wrong, please try again");
      }
      const orderHistory = await prisma.orders.create({
        data: {
          deliveryDate: data.date,
          totalWeight: data.totalWeight,
          deliveryPrice: data.deliveryPrice,
          discount: data.discount,
          totalPrice: data.totalPrice,
          orderDetails: JSON.stringify(data.order),
          userId: data.userId!,
        },
      });

      return orderHistory;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getOrdersHistory = async (
    userId: number,
    filters: OrdersHistoryFilterPeriod = "all"
  ) => {
    try {
      const orders = await prisma.orders.findMany({
        where: {
          userId,
          createdAt: this.generateOrdersFilter(filters),
        },
      });
      return orders;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

const controller = new OrderController();
export default controller;
