import React from "react";
import CartListItem from "./CartListItem";
import { useSelector } from "react-redux";
import { selectCart } from "@/redux/cartSlice/selectCart";
// import { AddToCartPayload } from "@/redux/cartSlice/cartSlice";

type Props = {
  isPreview: boolean;
};

const CartList = ({ isPreview }: Props) => {
  const cart = useSelector(selectCart);

  return (
    <ul className={`flex flex-col gap-3 mt-7 `}>
      {cart &&
        cart.map((item: any) => (
          // AddToCartPayload 'weight' is declared here.
          <CartListItem
            key={item._id}
            item={item}
            amount={1}
            isPreview={isPreview}
          />
        ))}
    </ul>
  );
};

export default CartList;
