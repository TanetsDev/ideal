"use client";

import Image from "next/image";
import MainContainer from "../Containers/MainContainer";
import { useState } from "react";
import EditLoginForm from "../Form/EditLoginForm";

const PersonalOffice = () => {
  const [openList, setOpenList] = useState<number | null>(null);
  const toggleList = (listId: number) => {
    setOpenList((prevListId) => (prevListId === listId ? null : listId));
  };
  return (
    <section className=" pt-[114px]  pb-[50px]  ">
      <MainContainer className="  lg:gap-[27px]  justify-center   ">
        <div className="xl:max-w-[300px] xl:flex xl:flex-col xl:justify-center xl:border-r xl:border-[#ECE7E7] ">
          <div className="flex justify-center md:justify-start items-center gap-[8px] xl:justify-center ">
            <Image
              src="/images/avatar.png"
              alt="Особистий кабінет"
              className=" size-[50px] md:size-[50px] "
              width="50"
              height="50"
            />
            <ul>
              <li className="flex gap-[4px]  font-manrope text-basicBlack text-[20px]  leading-[19px] ">
                <h2>Олена</h2> <h2>Коваль</h2>
              </li>
              <li className="text-secondaryGrey text-[14px]  leading-[19px] pt-[4px]">
                <p>olena124_koval@gmail.com</p>
              </li>
            </ul>
          </div>
          <ul className=" max-w-full pt-[20px] md:pt-[30px] xl:pl-[90px]">
            <li className="pb-[10px]">
              <div
                onClick={() => toggleList(1)}
                className="flex items-center justify-between font-manrope  hover:cursor-pointer"
              >
                <h3
                  className={`"text-[16px]  leading-[22px] hover:text-darkViolet hover:cursor-pointer "
                
       ${
         openList === 1 ? "text-darkViolet text-[18px]  leading-[25px]  " : ""
       } `}
                >
                  Мої замовлення
                </h3>
                <svg
                  onClick={() => toggleList}
                  width="20px"
                  height="20px"
                  className="fill-[#141414]  xl:hidden 
                  "
                >
                  <use
                    href={
                      openList === 1
                        ? "/symbol-defs.svg#arrow_up"
                        : "/symbol-defs.svg#arrow_down"
                    }
                  ></use>
                </svg>
              </div>
              {openList === 1 && (
                <ul
                  className={`${
                    openList === 1
                      ? "pt-[15px] pb-[15px]  md:max-w-[350px] xl:absolute  top-[96px] left-[430px] xl:w-[830px] xl:max-w-[830px]"
                      : ""
                  }`}
                >
                  <li>product</li>
                  <li>product</li>
                  <li>product</li>
                </ul>
              )}
            </li>
            <li className="pb-[10px]">
              <div
                onClick={() => toggleList(2)}
                className="flex items-center justify-between font-manrope  "
              >
                <h3
                  className={`"text-[16px]  leading-[22px] hover:text-darkViolet hover:cursor-pointer "
                
       ${
         openList === 2 ? "text-darkViolet text-[18px]  leading-[25px]  " : ""
       } `}
                >
                  Бонусний рахунок
                </h3>
                <svg
                  width="20px"
                  height="20px"
                  className="fill-[#141414] text-[18px] hover:cursor-pointer  xl:hidden"
                >
                  <use
                    href={
                      openList === 2
                        ? "/symbol-defs.svg#arrow_up"
                        : "/symbol-defs.svg#arrow_down"
                    }
                  ></use>
                </svg>
              </div>

              {openList === 2 && (
                <ul
                  className={`${
                    openList === 2
                      ? "pt-[15px] pb-[15px]  md:max-w-[350px] xl:absolute  top-[96px] left-[430px] xl:w-[830px] xl:max-w-[830px]"
                      : ""
                  }`}
                >
                  <li>product</li>
                  <li>product</li>
                  <li>product</li>
                </ul>
              )}
            </li>
            <li className="pb-[10px]">
              <div
                onClick={() => toggleList(3)}
                className="flex items-center justify-between font-manrope  "
              >
                <h3
                  className={`"text-[16px]  leading-[22px] hover:text-darkViolet hover:cursor-pointer  "
                
       ${
         openList === 3 ? "text-darkViolet text-[18px]  leading-[25px]  " : ""
       } `}
                >
                  Особисті данні
                </h3>
                <svg
                  width="20px"
                  height="20px"
                  className="fill-[#141414] text-[18px] hover:cursor-pointer  xl:hidden"
                >
                  <use
                    href={
                      openList === 3
                        ? "/symbol-defs.svg#arrow_up"
                        : "/symbol-defs.svg#arrow_down"
                    }
                  ></use>
                </svg>
              </div>

              {openList === 3 && (
                <ul
                  className={`${
                    openList === 3
                      ? "pt-[15px] pb-[15px]  md:max-w-[350px] xl:absolute  top-[96px] left-[430px] xl:w-[830px] xl:max-w-[830px]"
                      : ""
                  }`}
                >
                  <li>product</li>
                  <li>product</li>
                  <li>product</li>
                </ul>
              )}
            </li>

            <li className="pb-[10px]">
              <div
                onClick={() => toggleList(4)}
                className="flex items-center justify-between font-manrope  "
              >
                <h3
                  className={`"text-[16px]  leading-[22px] hover:text-darkViolet hover:cursor-pointer "
                
       ${
         openList === 4 ? "text-darkViolet text-[18px]  leading-[25px]  " : ""
       } `}
                >
                  Логін та пароль
                </h3>
                <svg
                  width="20px"
                  height="20px"
                  className="fill-[#141414] text-[18px] hover:cursor-pointer  xl:hidden"
                >
                  <use
                    href={
                      openList === 4
                        ? "/symbol-defs.svg#arrow_up"
                        : "/symbol-defs.svg#arrow_down"
                    }
                  ></use>
                </svg>
              </div>

              {openList === 4 && (
                <div
                  className={`${
                    openList === 4
                      ? "pt-[15px] pb-[15px]  md:max-w-[350px] xl:absolute  top-[96px] left-[430px] xl:w-[830px] xl:max-w-[830px]"
                      : ""
                  }`}
                >
                  <EditLoginForm />
                </div>
              )}
            </li>
            <li className="pb-[10px]">
              <div className="flex items-center justify-between font-manrope ">
                <h3
                  className={`"text-[16px]  leading-[22px] hover:text-darkViolet hover:cursor-pointer "
                
       `}
                >
                  Вийти
                </h3>
              </div>
            </li>
            <li className="pb-[10px]">
              <div className="flex items-center justify-between font-manrope  ">
                <h3
                  className={`"text-[14px] text-[#3F3F3F]  leading-[19px] hover:text-darkViolet hover:cursor-pointer "
                
       `}
                >
                  Видалити акаунт
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </MainContainer>
    </section>
  );
};
export default PersonalOffice;
