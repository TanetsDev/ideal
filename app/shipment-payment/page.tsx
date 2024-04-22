import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import MainSectionsBox from "@/components/Common/MainSectionsBox";
import Title from "@/components/Common/Title";
import MainContainer from "@/components/Containers/MainContainer";
import React from "react";

const page = () => {
  return (
    <>
      <MainContainer className="pt-[60px] md:pt-[76px]">
        <BreadCrumbs
          crumps={[
            { name: "Головна", path: "/" },
            { name: "Доставка і оплата", path: "/shipment-payment" },
          ]}
        />
      </MainContainer>
      <MainSectionsBox className="pt-[36px] pb-[50px] md:pt-6 md:pb-[70px] lg:pb-[140px]">
        <Title isMain className="text-center ">
          Доставка і оплата
        </Title>
        <MainContainer className="flex flex-col gap-6 md:gap-[46px] md:max-w-[560px] md:mx-auto md:mt-[46px] lg:max-w-full lg:mx-0 mt-7 lg:gap-x-[100px] lg:gap-y-[60px] lg:flex-row lg:flex-wrap">
          <div>
            <Title className=" text-base font-semibold mb-4 md:text-lg lg:text-lg ">
              Доставка
            </Title>
            <ul className="flex flex-col gap-3 text-base font-robotoFlex text-basicBlack md:text-lg lg:gap-[14px]">
              <li>
                При замовленні від 699 до 2000 грн. вартість доставки 149 грн.
              </li>
              <li>
                При замовленні від 2000 грн доставка в межах міста безкоштовна
              </li>
              <li>
                Доставка за межі міста прораховується менеджером індивідуально
              </li>
              <li>Самовивіз</li>
            </ul>
          </div>
          <div>
            <Title className=" text-base font-semibold mb-4 md:text-lg lg:text-lg ">
              Система знижок
            </Title>
            <ul className="flex flex-col gap-3 text-base font-robotoFlex text-basicBlack md:text-lg lg:gap-[14px]">
              <li>Самовивіз - 10%</li>
              <li>При замовленні понад 10000 грн – 5%</li>
              <li>
                Новим покупцям при реєстрації на перші два замовлення – 10%
              </li>
            </ul>
          </div>
          <div>
            <Title className=" text-base font-semibold mb-4 md:text-lg lg:text-lg ">
              Оплата
            </Title>
            <ul className="flex flex-col gap-3 text-base font-robotoFlex text-basicBlack md:text-lg lg:gap-[14px]">
              <li>Готівку кур&apos;єру, картою через термінал кур&apos;єру </li>
              <li>Картою на сайті, Google pay | Apple pay</li>
            </ul>
          </div>
        </MainContainer>
      </MainSectionsBox>
    </>
  );
};

export default page;
