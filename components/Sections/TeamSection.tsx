import React from "react";
import MainSectionsBox from "../Common/MainSectionsBox";
import MainContainer from "../Containers/MainContainer";
import Title from "../Common/Title";
import Image from "next/image";
import { heroBg } from "@/public/images";

const TeamSection = () => {
  return (
    <MainSectionsBox className="relative">
      <MainContainer>
        <Title className="text-center">Наша команда</Title>
      </MainContainer>
      <div className="md:pr-[20px] lg:w-[1062px] mt-[28px] md:mt-[46px] lg:mt-[48px]">
        <div className="relative w-full h-[230px] md:h-[456px] lg:h-[590px]  bg-cardGrey  md:rounded-r-[2px]">
          <div className=" absolute top-[23px] md:top-[57px] lg:top-[100px] lg:left-[52px] px-[18px] md:pl-5 md:pr-[88px] lg:pr-[44px]">
            <Image
              src={heroBg}
              alt="Фото команди"
              className="rounded h-[280px] md:h-[516px] lg:h-[630px] md:w-[592px] lg:w-[722px]"
            />
          </div>
          <div className="hidden absolute top-[200px] lg:px-0 -right-[320px] text-lg text-black font-robotoFlex lg:flex flex-col gap-5 items-end">
            <p className="max-w-[525px]">
              Наш колектив – це професіонали своєї справи, закохані у кулінарію
              та створення атмосфери затишку. Ми готові втілити ваші
              найсміливіші ідеї, роблячи кожну подію неповторною. Наша мета – не
              просто порадувати ваші смакові рецептори, а й створити враження,
              що залишиться у пам&apos;яті на довгі роки.
            </p>
            <p className="max-w-[525px]">
              Кожен фуршетний бокс <span className=" font-julius">IDEAL</span> –
              це справжній витвір мистецтва. Ми дбайливо відбираємо кращі
              продукти, стежимо за їхньою свіжістю та якістю. Наші бокси стануть
              яскравою окрасою будь-якого заходу, будь то корпоративні збори,
              весілля чи приватне свято.
            </p>
          </div>
        </div>
      </div>
      <MainContainer className="lg:hidden  mt-[103px] md:mt-[163px] lg:mt-0 text-base lg:text-lg text-black font-robotoFlex flex flex-col gap-[18px] md:gap-5 md:items-end">
        <p className="md:w-[520px]">
          Наш колектив – це професіонали своєї справи, закохані у кулінарію та
          створення атмосфери затишку. Ми готові втілити ваші найсміливіші ідеї,
          роблячи кожну подію неповторною. Наша мета – не просто порадувати ваші
          смакові рецептори, а й створити враження, що залишиться у пам&apos;яті
          на довгі роки.
        </p>
        <p className="md:w-[520px]">
          Кожен фуршетний бокс <span className=" font-julius">IDEAL</span> – це
          справжній витвір мистецтва. Ми дбайливо відбираємо кращі продукти,
          стежимо за їхньою свіжістю та якістю. Наші бокси стануть яскравою
          окрасою будь-якого заходу, будь то корпоративні збори, весілля чи
          приватне свято.
        </p>
      </MainContainer>
    </MainSectionsBox>
  );
};

export default TeamSection;
