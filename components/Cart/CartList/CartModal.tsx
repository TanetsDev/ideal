"use client";

import Modal from "@/components/Modal/Modal";
import React from "react";
import CartList from "./CartList";
import { uah } from "@/public/icons";
import Image from "next/image";
import MainGoldBtn from "@/components/Buttons/MainGoldBtn";
import { useSelector } from "react-redux";
import { selectCart, selectTotalPrice } from "@/redux/cartSlice/selectCart";
import GoldLink from "@/components/Buttons/GoldLink";

const CartModal = ({ closeModal }: { closeModal: () => void }) => {
  const cart = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <>
      {cart.length > 0 && (
        <Modal>
          <div className=" ">
            <h2 className=" text-xl text-basicBlack font-manrope pl-3 mb-4">
              Кошик
            </h2>
            <CartList isPreview />
            <div className=" px-3 pt-[18px] ">
              <div className="flex gap-[14px] items-baseline mb-10">
                <span className="text-base text-basicBlack font-manrope font-medium">
                  Разом
                </span>
                <div className="flex items-center">
                  <span className="text-xl text-basicBlack font-manrope">
                    {totalPrice}
                  </span>
                  <Image src={uah} alt="ікона валюти" className=" size-4 " />
                </div>
              </div>
              <div className="flex flex-col gap-6 md:flex-row">
                <MainGoldBtn
                  text="Продовжити покупки"
                  bordered
                  handleClick={closeModal}
                  blockName="CartModal"
                />
                <GoldLink href="/cart">Оформити замовлення</GoldLink>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CartModal;
