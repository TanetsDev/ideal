import prisma from "@/config/prisma";
import tokenCheck from "@/middlewares/tokenCheck";
import ResponseService from "@/services/Response.servise";
import TelegramBotService from "@/services/TelegramBot.service";
import { IOrder, OrdersHistoryFilterPeriod } from "@/types/order.types";
import { JsonValue } from "@prisma/client/runtime/library";
import { NextRequest } from "next/server";

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

  private createOrderHistory = async (data: IOrder) => {
    return prisma.orders.create({
      data: {
        deliveryDate: data.date,
        totalWeight: data.totalWeight,
        deliveryPrice: data.deliveryPrice,
        discount: data.discount,
        totalPrice: data.totalPrice,
        orderDetails: JSON.stringify(data.order),
        userId: data.userId,
      },
    });
  };

  private parseDetails = (details: JsonValue) => {
    return JSON.parse(details?.toString()!);
  };

  public createOrder = async (data: IOrder) => {
    try {
      const tgRes = await TelegramBotService.sendMessage(data, "order");
      if (!tgRes.ok) {
        return ResponseService.error(
          400,
          "Sending orders data error. Please try again"
        );
      }
      const orderHistory = await this.createOrderHistory(data);
      const parsedDetails = this.parseDetails(orderHistory.orderDetails);
      return ResponseService.success(
        { ...orderHistory, orderDetails: parsedDetails },
        201
      );
    } catch (error: any) {
      return ResponseService.error(400, error.message);
    }
  };

  public getOrdersHistory = async (req: NextRequest) => {
    try {
      const userId = await tokenCheck(req);
      if (typeof userId !== "number") return userId;

      const { searchParams } = new URL(req.url);
      const limit = Number(searchParams.get("limit"));
      const page = Number(searchParams.get("page"));
      const filter = searchParams.get(
        "filter"
      ) as OrdersHistoryFilterPeriod | null;

      const offset = limit * page;
      const filters = filter || "all";

      const orders = await prisma.orders.findMany({
        where: {
          userId,
          createdAt: this.generateOrdersFilter(filters),
        },
        take: limit,
        skip: offset,
      });

      const parsedOrders = orders.map((order) => {
        return {
          ...order,
          orderDetails: this.parseDetails(order.orderDetails),
        };
      });

      const totalDocs = await prisma.orders.count({
        where: {
          userId,
          createdAt: this.generateOrdersFilter(filters),
        },
      });
      return ResponseService.success({
        orders: parsedOrders,
        totalDocs,
        page,
        limit,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

const ordersController = new OrderController();
export default ordersController;
