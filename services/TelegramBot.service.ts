import config from "@/config";
import { BoxOrderSlot, IOrder } from "@/types/order.types";
import { IContactsMessageInfo } from "@/types/telegram.types";

class TelegramBotService {
  constructor() {}
  private token = config.telegram.token;
  private url = config.telegram.apiUrl;
  private target = config.telegram.targetName;

  private getOrderForMessage = (order: BoxOrderSlot[]) => {
    const orderStr: string[] = [];
    order.forEach((o) => {
      orderStr.push(`${o.boxName}: ${o.count} \n `);
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
    Замовник: ${name} ${lastName}, 
    Телефон: ${phone}, 
    адреса доставки: ${city}, ${address}. 
    Дата доставки: ${date}, час доставки: ${time}. 
    Спосіб доставки: ${deliveryMethod},
    Спосіб оплати: ${paymentMethod},
    Статус оплати: ${paymentrStatus},
    Замовлення: ${this.getOrderForMessage(order)}

    Ціна доставки: ${deliveryPrice},
    Знижка: ${discount}
    Загальна вартість: ${totalPrice}`;
  };

  private getContactMessageText = (data: IContactsMessageInfo) => {
    return `Вітаю! Ви отримали звернення з сайту! Ім'я: ${
      data.name
    }, Телефон: ${data.phone}, ${
      data.comment ? `, Повідомлення: ${data.comment}` : ""
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
