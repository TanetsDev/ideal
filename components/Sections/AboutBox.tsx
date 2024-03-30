import React from "react";
import Title from "../Common/Title";
import MainSectionsBox from "../Common/MainSectionsBox";
import MainContainer from "../Containers/MainContainer";
import AboutBoxSwiper from "../Swipers/AboutBoxSwiper";

const AboutBox = () => {
  return (
    <MainSectionsBox>
      <MainContainer className=" lg:flex lg:gap-[27px] items-center ">
        <div className="lg:max-w-[550px]">
          <Title className=" text-center md:text-start">
            Ідеальний бокс це
          </Title>
          <p className=" hidden lg:block text-lg text-basicBlack font-robotoFlex text-left mt-[48px] ">
            Фуршетний бокс - це компактний скарб вишуканих уподобань,
            представлених у формі вишуканих закусок та частування. На нашому
            сайті ви знайдете різноманітні комбінації смаку, оформлені з
            любов&apos;ю та увагою до деталей. Ці бокси стали справжнім
            відкриттям у світі гастрономії, дозволяючи насолоджуватися смаковими
            радощами, де б ви не знаходилися.
          </p>
          <p className=" hidden lg:block text-lg text-basicBlack mt-[26px] font-robotoFlex text-left">
            Замовляючи фуршетний бокс, ви позбавляєтеся необхідності самостійної
            підготовки закусок. Це ідеальне рішення для швидких та смачних
            частування на будь-якій події, від зустрічі з друзями до домашньої
            вечері. Фуршетні бокси є стильним та елегантним доповненням до
            будь-якого столу, надаючи вашому заходу витонченість та вишуканість.
          </p>
        </div>
        <AboutBoxSwiper />
        <p className=" font-robotoFlex text-left text-base md:text-lg text-basicBlack mt-7 md:mt-[46px] lg:hidden">
          Фуршетний бокс - це компактний скарб вишуканих уподобань,
          представлених у формі вишуканих закусок та частування. На нашому сайті
          ви знайдете різноманітні комбінації смаку, оформлені з любов&apos;ю та
          увагою до деталей. Ці бокси стали справжнім відкриттям у світі
          гастрономії, дозволяючи насолоджуватися смаковими радощами, де б ви
          незнаходи... <span className=" text-darkBlue">Читати далі....</span>
        </p>
      </MainContainer>
    </MainSectionsBox>
  );
};

export default AboutBox;
