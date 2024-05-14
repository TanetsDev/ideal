import config from "@/config";
import { IDeliveryInfo } from "@/types/order.types";
import { Users } from "@prisma/client";

export const bonusCounter = (sum: number): number => {
  const rate = config.bonuses.bonusRate;

  return sum * rate;
};

interface IDiscountArgs extends Partial<Pick<IDeliveryInfo, "deliveryMethod">> {
  user: Omit<Users, "createdAt" | "updatedAt" | "password"> | null;
  totalPrice: number;
}

export const discountCounter = ({
  deliveryMethod,
  user,
  totalPrice,
}: IDiscountArgs): number => {
  const deliveryDiscount =
    deliveryMethod === "Самовивіз" ? config.bonuses.pickupDiscount : 0;

  const personalDiscount = user?.discount ?? 0;

  const orderWeightDiscount = totalPrice > 10000 ? config.bonuses.more10k : 0;

  const welcomeDiscount = user?.isWelcomeDiscountAvalible
    ? config.bonuses.welcomeDiscount
    : 0;

  const extraDiscount =
    welcomeDiscount || personalDiscount || orderWeightDiscount;
  const totalDiscount = ((deliveryDiscount + extraDiscount) * totalPrice) / 100;
  return totalDiscount;
};
