"use client";

import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import MainSectionsBox from "@/components/Common/MainSectionsBox";
import MainContainer from "@/components/Containers/MainContainer";
import BoxPreviewCard from "@/components/Products/BoxPreviewCard";
import SuggeschionsSwiper from "@/components/Swipers/SuggeschionsSwiper";
import { selectBoxesState } from "@/redux/boxes/boxesSelector";
import { IBreadCrumb } from "@/types/market.types";
import React from "react";
import { useSelector } from "react-redux";

const SectionBox = () => {
  const { data } = useSelector(selectBoxesState);
  console.log(data);

  const crmbs: IBreadCrumb[] = [
    { name: "Головна", path: "/" },
    { name: "Shop", path: "/boxes" },
  ];
  return (
    <MainSectionsBox className="pb-[50px] md:pb-[70px]">
      <MainContainer className="pt-4">
        <BreadCrumbs crumps={crmbs} />

        <BoxPreviewCard />

        <h3 className=" text-xl md:text-[26px] font-manrope text-basicBlack mt-[50px] md:mt-[70px] xl:mt-[100px] mb-4 xl:mb-[62px]">
          Також для вас
        </h3>
        <SuggeschionsSwiper />
      </MainContainer>
    </MainSectionsBox>
  );
};

export default SectionBox;
