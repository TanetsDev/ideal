import { ICartBox } from "@/types/products.types";
import React from "react";
import CartListItem from "./CartListItem";

type Props = {
  items: ICartBox[];
  isPreview: boolean;
};

const CartList = ({ items, isPreview }: Props) => {
  return (
    <ul className={`flex flex-col gap-3 mt-7 `}>
      {items.map((item) => (
        <CartListItem
          key={item.id}
          item={item}
          amount={1}
          isPreview={isPreview}
        />
      ))}
    </ul>
  );
};

export default CartList;
