"use client";

import Modal from "@/components/Modal/Modal";
import { cartMock } from "@/mockData/mockCart";
import React, { useState } from "react";
import CartList from "./CartList";
import { uah } from "@/public/icons";
import Image from "next/image";
import MainGoldBtn from "@/components/Buttons/MainGoldBtn";

const CartModal = () => {
  const [total, setTotal] = useState<number>(2800);
  return (
    <Modal>
      <h2 className=" text-xl text-basicBlack font-manrope pl-3 mb-4">Кошик</h2>
      <CartList items={cartMock} isPreview />
      <div className=" px-3 pt-[18px] ">
        <div className="flex gap-[14px] items-baseline mb-10">
          <span className="text-base text-basicBlack font-manrope font-medium">
            Разом
          </span>
          <div className="flex items-center">
            <span className="text-xl text-basicBlack font-manrope">
              {total}
            </span>
            <Image src={uah} alt="ікона валюти" className=" size-4 " />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <MainGoldBtn
            text="Продовжити покупки"
            bordered
            handleClick={() => console.log("Click")}
            blockName="CartModal"
          />
          <MainGoldBtn
            text="Оформити замовлення"
            handleClick={() => console.log("Click")}
            blockName="CartModal"
          />
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
