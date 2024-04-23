"use client";

import Image from "next/image";
import MainContainer from "../Containers/MainContainer";
import { useState } from "react";
import EditLoginForm from "../Form/EditLoginForm";
import ListItem from "./ListItem";
import PersonalDataForm from "../Form/PersonalDataForm";
import MyOrders from "./MyOrders";
import BonusAccount from "./BonusAccount";

const PersonalOffice = () => {
  const [openList, setOpenList] = useState<number | null>(null);
  const toggleList = (listId: number) => {
    setOpenList((prevListId) => (prevListId === listId ? null : listId));
  };
  return (
    <section className=" pt-[114px]  pb-[150px]   xl:pb-[400px]  ">
      <div
        className=" border-l  xl:border-[#ECE7E7] absolute inset-y-0  left-[370px] hidden xl:block   
      // 
      z-[-1]
      "
      ></div>

      <MainContainer className="  lg:gap-[27px]  justify-center    ">
        <div className="xl:max-w-[300px] xl:flex xl:flex-col xl:justify-center   ">
          <div className="flex  md:justify-start items-center gap-[8px] xl:justify-center ">
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
            <ListItem
              title="Мої замовлення"
              isOpen={openList === 1}
              toggleList={() => toggleList(1)}
            >
              <MyOrders />
            </ListItem>
            <ListItem
              title="Бонусний рахунок"
              isOpen={openList === 2}
              toggleList={() => toggleList(2)}
            >
              <BonusAccount />
            </ListItem>
            <ListItem
              title="Особисті данні"
              isOpen={openList === 3}
              toggleList={() => toggleList(3)}
            >
              <PersonalDataForm />
            </ListItem>
            <ListItem
              title="Логін та пароль"
              isOpen={openList === 4}
              toggleList={() => toggleList(4)}
            >
              <EditLoginForm />
            </ListItem>

            <li className="pb-[10px]">
              <div className="flex items-center justify-between font-manrope  ">
                <h3
                  className={`"text-[16px]  leading-[22px]  hover:text-darkViolet hover:cursor-pointer " `}
                >
                  Вийти
                </h3>
              </div>
            </li>

            <li className="pt-[20px]">
              <div className="flex items-center justify-between font-manrope  ">
                <h3
                  className={`"text-[14px] text-[#3F3F3F]  leading-[19px] hover:text-darkViolet hover:cursor-pointer " `}
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
