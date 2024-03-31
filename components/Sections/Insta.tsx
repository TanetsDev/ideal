import React from "react";
import MainSectionsBox from "../Common/MainSectionsBox";
import Title from "../Common/Title";
import InstaSwiper from "../Swipers/InstaSwiper";

const Insta = () => {
  return (
    <MainSectionsBox className="pb-[50px] md:pb-[70px] lg:pb-[100px] lg:pt-[240px]">
      <Title className="text-center">Ми в instagram</Title>
      <div className="px-1 md:p-0 mt-[28px] md:mt-[46px] lg:mt-[48px]">
        <InstaSwiper />
      </div>
    </MainSectionsBox>
  );
};

export default Insta;
