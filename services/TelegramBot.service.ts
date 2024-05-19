import config from "@/config";
import { BoxOrderSlot, IOrder } from "@/types/order.types";
import { IContactsMessageInfo } from "@/types/telegram.types";
import dayjs from "dayjs";

class TelegramBotService {
  constructor() {}
  private token = config.telegram.token;
  private url = config.telegram.apiUrl;
  private target = config.telegram.targetName;

  private getOrderForMessage = (order: BoxOrderSlot[]) => {
    const orderStr: string[] = [];
    order.forEach((o) => {
      orderStr.push(`%0A${o.boxName}: ${o.count}`);
    });
    return orderStr.join(" ");
  };

  private getOrderMessageText = (data: IOrder) => {
    const {
      name,
      lastName,
      phone,
      deliveryMethod,
      city,
      address,
      date,
      time,
      paymentMethod,
      order,
      deliveryPrice,
      discount,
      totalPrice,
      paymentrStatus,
    } = data;

    return `Вітаю! Ви отримали замовлення з сайту! 
    %0AЗамовник: ${name} ${lastName}, 
    %0AТелефон: ${phone}, 
    %0AAдреса доставки: ${city}, ${address}. 
    %0AДата доставки: ${dayjs(date).format(
      "DD-MM-YYYY"
    )}, час доставки: ${time}. 
    %0AСпосіб доставки: ${deliveryMethod},
    %0AСпосіб оплати: ${paymentMethod},
    %0AСтатус оплати: ${paymentrStatus},
    %0AЗамовлення: ${this.getOrderForMessage(order)}
    %0A
    %0AЦіна доставки: ${deliveryPrice},
    %0AЗнижка: ${discount}
    %0AЗагальна вартість: ${totalPrice}`;
  };

  private getContactMessageText = (data: IContactsMessageInfo) => {
    return `Вітаю! Ви отримали звернення з сайту! 
    %0AІм'я: ${data.name}, 
    %0AПрізвище: ${data.lastName}, 
    %0AТелефон: ${data.phone}, ${
      data.comment
        ? `, 
      %0AПовідомлення: ${data.comment}`
        : ""
    }`;
  };

  public sendMessage = async (
    data: IOrder | IContactsMessageInfo,
    type: "order" | "contacts"
  ) => {
    const text =
      type === "contacts"
        ? this.getContactMessageText(data)
        : this.getOrderMessageText(data as IOrder);

    const res = await fetch(
      `${this.url}bot${this.token}/sendMessage?chat_id=${this.target}&text=${text}`
    );
    return res;
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TelegramBotService();
