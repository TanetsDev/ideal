"use client";

import GoldLink from "@/components/Buttons/GoldLink";
import CartForm from "@/components/Cart/CartForm/CartForm";
import CartList from "@/components/Cart/CartList/CartList";
import MainSectionsBox from "@/components/Common/MainSectionsBox";
import Title from "@/components/Common/Title";
import MainContainer from "@/components/Containers/MainContainer";
import {
  selectTotalPrice,
  selectTotalWeight,
} from "@/redux/cartSlice/selectCart";
// import { useCreateMutation, useGetByUserQuery } from "@/redux/orders/ordersApi";
// import { IOrder } from "@/types/order.types";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const [isNewActive, setIsNewActive] = useState<boolean>(true);
  const totalPrice = useSelector(selectTotalPrice);
  const totalWeight = useSelector(selectTotalWeight);
  // const [register] = useCreateMutation();
  // const { data } = useGetByUserQuery({ limit: 10, page: 0 });
  // console.log("DATA ORDERS", data);

  // const handleOrder = async () => {
  //   const order: IOrder = {
  //     name: "Ivan",
  //     lastName: "Ivanov",
  //     phone: 665556699,
  //     deliveryMethod: "кур'єром",
  //     city: "Kyiv",
  //     address: "Golosiivo",
  //     date: new Date(),
  //     time: "18.45",
  //     paymentMethod: "кур'єру",
  //     order: [
  //       { boxName: "Cool box", count: 2 },
  //       { boxName: "Coolest box", count: 5 },
  //     ],
  //     deliveryPrice: 150,
  //     discount: 0,
  //     totalPrice: 2500,
  //     totalWeight: 1250,
  //     paymentrStatus: "fullfield",
  //     userId: 42,
  //   };

  //   const orderHistory = await register(order);
  //   console.log("ORDER HISTORY", orderHistory);
  // };

  return (
    <MainSectionsBox className="mb-[50px] xl:px-[72px]">
      {totalPrice === 0 ? (
        <MainContainer className="pt-[50px]  md:pt-[60px]">
          <Title className="text-center  ">Ви нічого не обрали</Title>
          <GoldLink href="/">До головної</GoldLink>
        </MainContainer>
      ) : (
        <>
          <MainContainer className="pt-[50px]  md:pt-[60px] xl:pl-0 xl:pr-0">
            <Title className="text-center mb-7 md:mb-10 xl:text-start">
              Оформлення замовлення
            </Title>
          </MainContainer>
          <div className="xl:flex gap-[275px]">
            <MainContainer className="pb-[50px]  xl:w-[400px] xl:pl-0 xl:pr-0">
              <div className="flex  mb-6 text-xs font-manrope text-basicBlack justify-center gap-[60px] md:text-base md:mb-[50px] xl:w-[400px]">
                <span
                  className={`pb-1 ${isNewActive && "userStatusActive"}`}
                  onClick={() => setIsNewActive((prev) => !prev)}
                >
                  Новий покупець
                </span>
                <span
                  className={`pb-1 ${!isNewActive && "userStatusActive"}`}
                  onClick={() => setIsNewActive((prev) => !prev)}
                >
                  Зареєстрований покупець
                </span>
              </div>
              <CartForm />
            </MainContainer>
            <div className="xl:w-full">
              <MainContainer className="max-w-[720px]  mx-auto xl:max-w-full xl:pl-0 xl:pr-0 xl:h-auto">
                <Title className=" xl:text-[22px]">Ваше замовлення</Title>
                <CartList isPreview={false} />
              </MainContainer>
              <MainContainer className=" mt-5  mx-auto  max-w-[720px] xl:pl-0 xl:pr-0 h-[700px]">
                <ul className="flex flex-col gap-2 font-manrope text-base text-basicBlack totalCartList">
                  <li key={1} className="flex justify-between">
                    <span>Загальна вага:</span>
                    <span>{totalWeight} гр</span>
                  </li>
                  <li key={2} className="flex justify-between">
                    <span>Доставка:</span>
                    <span>{0} грн</span>
                  </li>
                  <li key={3} className="flex justify-between">
                    <span>Знижка:</span>
                    <span>{0} %</span>
                  </li>
                  <li
                    key={4}
                    className="flex justify-between text-lg font-semibold"
                  >
                    <span>Разом:</span>
                    <span>{totalPrice} грн</span>
                  </li>
                </ul>
              </MainContainer>
            </div>
          </div>
        </>
      )}
      <MainContainer className=" mt-5  mx-auto  max-w-[720px] lg:pl-0 lg:pr-0 h-[700px]">
        <ul className="flex flex-col gap-2 font-manrope text-base text-basicBlack totalCartList">
          <li key={1} className="flex justify-between">
            <span>Загальна вага:</span>
            <span>{1294} гр</span>
          </li>
          <li key={2} className="flex justify-between">
            <span>Доставка:</span>
            <span>{0} грн</span>
          </li>
          <li key={3} className="flex justify-between">
            <span>Знижка:</span>
            <span>{0} %</span>
          </li>
          <li key={4} className="flex justify-between text-lg font-semibold">
            <span>Разом:</span>
            <span>{4589} грн</span>
          </li>
        </ul>
      </MainContainer>

      {/* <button type="button" onClick={handleOrder}>
        CLICK Order
      </button> */}
    </MainSectionsBox>
  );
};

export default CartPage;
