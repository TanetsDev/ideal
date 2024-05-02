"use client";

import { goldLogo, goldArrowDown } from "@/public/icons";
import { heroBg } from "@/public/images";
import React from "react";
import MainContainer from "../Containers/MainContainer";
import Image from "next/image";
import { useGetBannerQuery } from "@/redux/banner/bannerAPi";

const HeroSection = () => {
  const { data, error, isLoading } = useGetBannerQuery({});
  console.log("Banner", data);

  return (
    <section className=" h-[740px] md:h-[1133px] lg:h-[960px] relative">
      <h1 className=" invisible absolute">
        Доставка боксів, від компанії &rdquo;Ideal food service&rdquo;
      </h1>
      <Image
        src={heroBg}
        alt="Баннер"
        className=" size-full object-cover absolute"
      />
      <MainContainer className=" flex flex-col items-center ">
        <div className=" w-full h-[740px] md:h-[1133px] lg:h-[960px] bg-hero md:bg-heroTablet lg:bg-heroDesc absolute left-0 top-0 right-0"></div>
        <Image
          src={goldLogo}
          alt="Логотип компанії"
          className=" w-[338px] md:w-[465px] lg:w-[521px] h-[84px] md:h-[116px] lg:h-[131px] mt-auto z-10 self-end "
        />
        <div className="z-10 flex items-center justify-center gap-1 md:gap-4 mt-[125px] md:mt-[305px] lg:mt-[370px] mb-[105px] md:mb-[188px] lg:mb-[118px] lg:self-start">
          <Image
            src={goldArrowDown}
            alt="Стрілка вниз"
            height={115}
            width={16}
          />
          <h3 className=" text-white text-sm md:text-lg  font-manrope font-medium md:text-center lg:text-start lg:max-w-[637px] ">
            <span className=" text-center block md:inline">Переконайтеся,</span>{" "}
            що ідеальне - це не просто слово, а справжній витвір смаку та
            вишуканості на вашому заході
          </h3>
        </div>
      </MainContainer>
    </section>
  );
};

export default HeroSection;
