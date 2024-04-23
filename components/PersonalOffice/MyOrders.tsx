"use client";
import { useState } from "react";
import list_orders from "./list_orders.json";
import Image from "next/image";
import { BsXLg } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import GoldBtn from "../Buttons/GoldBtn";

const MyOrders = () => {
  const [selectedOption, setSelectedOption] = useState("all");

  const [openList, setOpenList] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setSelectedOption(value);
  };

  const toggleList = (listId: string) => {
    setOpenList((prevListId) => (prevListId === listId ? null : listId));
  };

  return (
    <div
      className="scrollbar-hidden 
      xl:overflow-auto xl:h-[600px] 
    xl:pr-[10px]"
    >
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
        {list_orders.map(
          ({
            orderNumber,
            dateReceived,
            timeReceived,
            image,
            productQuantity,
            totalCost,
            products,
          }) => (
            <li
              key={orderNumber}
              className="border-y-[1px] border-solid border-[#ECE7E7]"
            >
              <div
                onClick={() => toggleList(orderNumber)}
                className="md:flex gap-[20px]  items-center md:justify-between py-[15px] "
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="pb-[10px] text-[16px] leading-[24px] text-basicBlack font-roboto">
                      Замовлення № {orderNumber}
                    </p>
                    <p className="pb-[10px] md:pb-[0px] text-[16px] leading-[24px] text-basicBlack font-roboto">
                      Дата {dateReceived} <span>{timeReceived}</span>
                    </p>
                  </div>

                  <div className="md:hidden flex  items-center gap-[10px] ">
                    {/* <span className="">Доставлено</span> */}
                    {openList === orderNumber ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between ">
                  <div className=" flex gap-[10px] justify-items-center items-center ">
                    <Image
                      src={image}
                      alt="product"
                      width="60"
                      height="60"
                      className="w-[60px] h-[60px] rounded"
                    />
                    <BsXLg className="text-[#A6A0A0] text-[14px] " />
                    <span className="text-[18px] text-basicBlack font-roboto">
                      {productQuantity}
                    </span>
                  </div>

                  <span className="md:hidden text-[18px] leading-[27px] text-basicBlack font-roboto">
                    {totalCost}₴
                  </span>
                </div>

                <div className="hidden md:flex items-center">
                  <div className="md:flex flex-col">
                    {/* <span className="pb-[10px] text-[16px] leading-[24px] text-basicBlack font-roboto">
                      Доставлено
                    </span> */}

                    <span className="text-[18px] leading-[27px] text-basicBlack font-roboto">
                      {totalCost}₴
                    </span>
                  </div>
                  {openList === orderNumber ? (
                    <IoIosArrowUp className="ml-[100px]" />
                  ) : (
                    <IoIosArrowDown className="ml-[100px]" />
                  )}
                </div>
              </div>
              {openList === orderNumber && (
                <div className="md:flex   justify-between pb-[30px] pt-[30px]">
                  <ul className=" flex flex-col gap-[15px] ">
                    {products.map(
                      ({
                        id,
                        productName,
                        image1,
                        weight,
                        price,
                        quantity,
                      }) => (
                        <li key={id}>
                          <div className="flex items-center gap-[15px] ">
                            <Image
                              src={image1}
                              alt="product"
                              width="100"
                              height="100"
                              className="w-[100px] h-[100px] rounded"
                            />
                            <div className=" mr-auto">
                              <h3 className="font-semibold text-[18px] leading-[25px] text-basicBlack font-manrope">
                                {productName}
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
                              {quantity}
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
                        <span>1000 гр</span>
                      </p>
                      <p className="flex justify-between">
                        Доставка:
                        <span>0 грн</span>
                      </p>
                      <p className="flex justify-between">
                        Знижка :<span>0 %</span>
                      </p>
                      <p className=" flex justify-between font-semibold text-[18px] leading-[25px] text-basicBlack font-manrope">
                        Разом:
                        <span>2000 грн</span>
                      </p>
                    </div>
                    <GoldBtn
                      className="md:w-[182px]"
                      blockName="EditForm"
                      handleClick={() => console.log("Замовити знов ")}
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
  );
};

export default MyOrders;
