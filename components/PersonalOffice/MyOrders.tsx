"use client";
import { useState } from "react";
import Image from "next/image";
import { BsXLg } from "react-icons/bs";
import GoldBtn from "../Buttons/GoldBtn";
import { useGetByUserQuery } from "@/redux/orders/ordersApi";
import Loader from "../Loaders/Loader";
import dayjs from "dayjs";
import GoldLink from "../Buttons/GoldLink";

interface IOrderDetails {
  id: string;
  deliveryDate: string;
  discount: number;
  totalPrice: number;
  deliveryPrice: number;
  totalWeight: number;
  orderDetails: {
    boxName: string;
    imageUrl: string;
    weight: number;
    price: number;
    count: number;
  }[];
}

const MyOrders = () => {
  const [selectedOption, setSelectedOption] = useState("all");

  const [openList, setOpenList] = useState<string | null>(null);
  const { data, isLoading, error } = useGetByUserQuery({
    limit: 10,
    page: 0,
  });

  // const handleReorder = (id: string) => {
  //   console.log(id);
  // };
  console.log(data);

  if (isLoading)
    return (
      <div className=" pt-[200px] pb-[200px] flex items-center justify-center">
        <Loader type="local" size={100} />
      </div>
    );
  if (error) {
    console.error("Error My Orders:", error);
    return (
      <div className=" pt-[200px] pb-[200px]">
        Error fetching My Orders. Please try again later.
      </div>
    );
  }

  const handleChange = (value: string) => {
    setSelectedOption(value);
  };

  const toggleList = (listId: string) => {
    setOpenList((prevListId) => (prevListId === listId ? null : listId));
  };

  return (
    <>
      {data.orders.length > 0 ? (
        <div className="    xl:pr-[10px]">
          <h2 className="hidden xl:block text-[24px] leading-[33px] pb-[30px]">
            Мої замовлення
          </h2>
          {/* фільтр */}
          <div className="flex gap-[10px] flex-wrap pb-[15px]">
            <label
              onClick={() => handleChange("all")}
              className={`text-basicBlack text-[16px] font-manrope leading-[22px] cursor-pointer hover:text-[#733774] focus:text-[#733774]  ${
                selectedOption === "all" ? "text-[#733774]" : ""
              }`}
            >
              Всі
              <input
                type="radio"
                name="orderOption"
                value="all"
                checked={selectedOption === "all"}
                onChange={() => handleChange("all")}
                className="hidden"
              />
            </label>
            <label
              onClick={() => handleChange("thisMonth")}
              className={`text-basicBlack text-[16px] cursor-pointer font-manrope leading-[22px] hover:text-[#733774] focus:text-[#733774]  ${
                selectedOption === "thisMonth" ? "text-[#733774]" : ""
              }`}
            >
              Цього місяця
              <input
                type="radio"
                name="orderOption"
                value="thisMonth"
                checked={selectedOption === "thisMonth"}
                onChange={() => handleChange("thisMonth")}
                className="hidden"
              />
            </label>
            <label
              onClick={() => handleChange("last6Months")}
              className={`text-basicBlack text-[16px] cursor-pointer font-manrope leading-[22px] hover:text-[#733774] focus:text-[#733774]  ${
                selectedOption === "last6Months" ? "text-[#733774]" : ""
              }`}
            >
              За 6 місяців
              <input
                type="radio"
                name="orderOption"
                value="last6Months"
                checked={selectedOption === "last6Months"}
                onChange={() => handleChange("last6Months")}
                className="hidden"
              />
            </label>
            <label
              onClick={() => handleChange("last12Months")}
              className={`text-basicBlack text-[16px] cursor-pointer font-manrope leading-[22px] hover:text-[#733774] focus:text-[#733774]  ${
                selectedOption === "last12Months" ? "text-[#733774]" : ""
              }`}
            >
              За 12 місяців
              <input
                type="radio"
                name="orderOption"
                value="last12Months"
                checked={selectedOption === "last12Months"}
                onChange={() => handleChange("last12Months")}
                className="hidden"
              />
            </label>
          </div>
          {/* список замовлень */}
          <ul
            className="flex flex-col gap-[10px]
      "
          >
            {data.orders &&
              data.orders.map(
                ({
                  id,

                  deliveryDate,
                  discount,
                  totalPrice,
                  deliveryPrice,
                  totalWeight,
                  orderDetails,
                }: IOrderDetails) => (
                  <li
                    key={id}
                    className="border-y-[1px] border-solid border-[#ECE7E7]"
                  >
                    <div
                      onClick={() => toggleList(id)}
                      className="md:flex gap-[20px]  items-center md:justify-between py-[15px] "
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="pb-[10px] text-[16px] leading-[24px] text-basicBlack font-roboto">
                            Замовлення № {id}
                          </p>
                          <p className="pb-[10px] md:pb-[0px] text-[16px] leading-[24px] text-basicBlack font-roboto">
                            Дата {dayjs(deliveryDate).format("YYYY.MM.DD")}
                            <span className="pl-[10px]">
                              {dayjs(deliveryDate).format(" HH:mm")}
                            </span>
                          </p>
                        </div>

                        <div className="md:hidden flex  items-center gap-[10px] ">
                          {/* <span className="">Доставлено</span> */}
                          {openList === id ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="stroke-[#141414]  xl:hidden w-5 h-5"
                            >
                              <path d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="stroke-[#141414]  xl:hidden w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                            >
                              <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between ">
                        <div className=" flex gap-[10px] justify-items-center items-center ">
                          <Image
                            src={
                              orderDetails[0].imageUrl ||
                              "/images/slidersImages/aboutBox/Rectangle 18.jpg"
                            }
                            alt="product"
                            width="160"
                            height="160"
                            className="w-[60px] h-[60px] rounded"
                          />
                          <BsXLg className="text-[#A6A0A0] text-[14px] " />
                          <span className="text-[18px] text-basicBlack font-roboto">
                            {orderDetails[0].count}
                          </span>
                        </div>

                        <span className="md:hidden text-[18px] leading-[27px] text-basicBlack font-roboto">
                          {totalPrice}₴
                        </span>
                      </div>

                      <div className="hidden md:flex items-center">
                        <div className="md:flex flex-col">
                          <span className="text-[18px] leading-[27px] text-basicBlack font-roboto">
                            {totalPrice}₴{/* - discount + deliveryPrice */}
                          </span>
                        </div>
                        {openList === id ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="stroke-[#141414]   w-5 h-5 ml-[100px]"
                          >
                            <path d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-[#141414]   w-5 h-5 ml-[100px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        )}
                      </div>
                    </div>
                    {openList === id && (
                      <div className="md:flex   justify-between pb-[30px] pt-[30px]">
                        <ul className=" flex flex-col gap-[15px] ">
                          {orderDetails &&
                            orderDetails?.map(
                              (
                                { boxName, imageUrl, weight, price, count },
                                index
                              ) => (
                                <li key={index}>
                                  <div className="flex items-center gap-[15px] ">
                                    <Image
                                      src={imageUrl}
                                      alt="product"
                                      width="100"
                                      height="100"
                                      className="w-[100px] h-[100px] rounded"
                                    />
                                    <div className=" mr-auto">
                                      <h3 className="font-semibold text-[18px] leading-[25px] text-basicBlack font-manrope">
                                        {boxName}
                                      </h3>
                                      <p className="text-[14px] leading-[19px] text-basicBlack font-manrope pt-[5px] pb-[5px]">
                                        Вага {weight} гр
                                      </p>
                                      <p className="font-medium text-[18px] leading-[25px] text-basicBlack font-manrope">
                                        {price} ₴
                                      </p>
                                    </div>

                                    <BsXLg className="text-[#A6A0A0] text-[14px] " />

                                    <p className="text-[18px] leading-[27px] text-basicBlack font-roboto">
                                      {count}
                                    </p>
                                  </div>
                                </li>
                              )
                            )}
                        </ul>
                        <div className="pb-[20px] pt-[20px] md:pt-0 md:w-[205px]">
                          <div className=" pb-[30px] flex flex-col gap-[15px] text-[16px] leading-[22px] text-basicBlack font-manrope">
                            <p className="flex justify-between">
                              Загальна вага:
                              <span>{totalWeight} гр</span>
                            </p>
                            <p className="flex justify-between">
                              Доставка:
                              <span>{deliveryPrice} грн</span>
                            </p>
                            <p className="flex justify-between">
                              Знижка :<span>{discount} грн</span>
                            </p>
                            <p className=" flex justify-between font-semibold text-[18px] leading-[25px] text-basicBlack font-manrope">
                              Разом:
                              <span>
                                {totalPrice - discount + deliveryPrice} ₴
                              </span>
                            </p>
                          </div>

                          <GoldBtn
                            className="md:w-[182px]"
                            blockName="EditForm"
                            handleClick={() => console.log("clik")}
                            type="button"
                          >
                            Замовити знов
                          </GoldBtn>
                        </div>
                      </div>
                    )}
                  </li>
                )
              )}
          </ul>
        </div>
      ) : (
        <div className="    xl:pr-[10px]">
          <h2 className="  text-[24px] leading-[33px] pb-[30px]">
            Тут будуть ваші замовлення
          </h2>
          <GoldLink href="/boxes">До покупок</GoldLink>
        </div>
      )}
    </>
  );
};

export default MyOrders;
