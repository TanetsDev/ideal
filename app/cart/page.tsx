"use client";

import GoldLink from "@/components/Buttons/GoldLink";
import CartForm from "@/components/Cart/CartForm/CartForm";
import CartList from "@/components/Cart/CartList/CartList";
import OrderSubmitted from "@/components/Cart/OrderSubmitted/OrderSubmitted";
import MainSectionsBox from "@/components/Common/MainSectionsBox";
import Title from "@/components/Common/Title";
import MainContainer from "@/components/Containers/MainContainer";
import SingInForm from "@/components/Form/SingInForm";
import GoogleAuth from "@/components/Google/GoogleAuth";
import Loader from "@/components/Loaders/Loader";
import authSelector from "@/redux/auth/authSelector";
import {
  selectTotalPrice,
  selectTotalWeight,
} from "@/redux/cartSlice/selectCart";
import { selectIsLoading } from "@/redux/orders/ordersSelectors";
import { IDeliveryInfo } from "@/types/order.types";
import { discountCounter } from "@/utils/bonusDiscountCounter";

import React, { useState } from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const user = useSelector(authSelector.getUser);
  const isLoading = useSelector(selectIsLoading);
  const token = useSelector(authSelector.selectToken);

  const [isNewActive, setIsNewActive] = useState<boolean>(!user);

  const totalWeight = useSelector(selectTotalWeight);
  const totalPrice = useSelector(selectTotalPrice);

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const [formValues, setFormValues] = useState<IDeliveryInfo | null>(null);

  const handleOrderSubmission = () => {
    setOrderSubmitted(true);
  };
  console.log(user);

  return (
    <MainSectionsBox className="mb-[50px] xl:px-[72px]">
      {isLoading && <Loader size={100} type={"global"} />}
      {orderSubmitted ? (
        <OrderSubmitted />
      ) : (
        <>
          {totalPrice === 0 ? (
            <MainContainer className="pt-[50px]  md:pt-[60px] flex flex-col items-center gap-[20px]">
              <Title className="text-center  ">Ви нічого не обрали</Title>
              <GoldLink href="/boxes">До покупок</GoldLink>
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
                  {isNewActive ? (
                    <CartForm
                      setFormValues={setFormValues}
                      onOrderSuccess={handleOrderSubmission}
                    />
                  ) : token ? (
                    <CartForm
                      setFormValues={setFormValues}
                      onOrderSuccess={handleOrderSubmission}
                    />
                  ) : (
                    <>
                      <SingInForm />
                      <p className="max-w-[375px] mx-auto md:w-[350px] pt-[20px] text-sm leading-[16px] text-center mb-5">
                        Або за допомогою
                      </p>
                      <GoogleAuth />
                    </>
                  )}
                </MainContainer>
                <div className="xl:w-full">
                  <MainContainer className="max-w-[720px]  mx-auto xl:max-w-full xl:pl-0 xl:pr-0 xl:h-auto">
                    <Title className=" xl:text-[22px]">Ваше замовлення</Title>
                    <CartList isPreview={false} />
                  </MainContainer>
                  {/* h-[700px] */}
                  <MainContainer className=" mt-5  mx-auto  max-w-[720px] xl:pl-0 xl:pr-0 ">
                    <ul className="flex flex-col gap-2 font-manrope text-base text-basicBlack totalCartList">
                      <li key={1} className="flex justify-between">
                        <span>Загальна вага:</span>
                        <span>{totalWeight} гр</span>
                      </li>
                      <li key={2} className="flex justify-between">
                        <span>Доставка:</span>

                        <span>
                          {formValues?.deliveryMethod === "Кур'єром" ? 150 : 0}{" "}
                          грн
                        </span>
                      </li>
                      <li key={3} className="flex justify-between">
                        <span>Знижка:</span>
                        <span>
                          {discountCounter({
                            user,
                            totalPrice,
                            deliveryMethod: formValues?.deliveryMethod,
                          })}
                        </span>
                      </li>
                      <li
                        key={4}
                        className="flex justify-between text-lg font-semibold"
                      >
                        <span>Разом:</span>
                        <span>
                          {totalPrice -
                            discountCounter({
                              user,
                              totalPrice,
                              deliveryMethod: formValues?.deliveryMethod,
                            })}
                          грн
                        </span>
                      </li>
                    </ul>
                  </MainContainer>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </MainSectionsBox>
  );
};

export default CartPage;
