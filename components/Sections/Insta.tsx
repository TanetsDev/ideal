import React from "react";
import MainSectionsBox from "../Common/MainSectionsBox";
import Title from "../Common/Title";
import InstaSwiper from "../Swipers/InstaSwiper";

const Insta = () => {
  return (
    <MainSectionsBox className="pb-[50px] md:pb-[70px] xl:pb-[100px] xl:pt-[240px] overflow-hidden xl:max-w-full px-0">
      <Title className="text-center">Ми в instagram</Title>
      <div className="px-1 md:p-0 mt-[28px] md:mt-[46px] xl:mt-[48px] mx-auto w-[750px] md:w-[1300px] lg:w-[1500px]  xl:w-[1860px]">
        <InstaSwiper />
      </div>
    </MainSectionsBox>
  );
};

export default Insta;
