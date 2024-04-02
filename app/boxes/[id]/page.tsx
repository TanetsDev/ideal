"use client";

import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import MainGoldBtn from "@/components/Buttons/MainGoldBtn";
import MainSectionsBox from "@/components/Common/MainSectionsBox";
import Title from "@/components/Common/Title";
import MainContainer from "@/components/Containers/MainContainer";
import BoxPreviewCard from "@/components/Products/BoxPreviewCard";
import SuggeschionsSwiper from "@/components/Swipers/SuggeschionsSwiper";
import { uah } from "@/public/icons";
import { IBreadCrumb } from "@/types/market.types";
import { BoxMarkerType } from "@/types/products.types";
import Image from "next/image";
import React from "react";
const crmbs: IBreadCrumb[] = [
  { name: "Головна", path: "/" },
  { name: "Shop", path: "/boxes" },
];

const box = {
  id: 1,
  title: "Супер бокс",
  price: 160,
  person: 4,
  imageUrl: "",
  type: "hit" as BoxMarkerType,
};

const page = () => {
  return (
    <MainSectionsBox className="pb-[50px] md:pb-[70px]">
      <MainContainer className="pt-4">
        <BreadCrumbs crumps={crmbs} />

        <BoxPreviewCard box={box} />

        <h3 className=" text-xl md:text-[26px] font-manrope text-basicBlack mt-[50px] md:mt-[70px] lg:mt-[100px] mb-4 lg:mb-[62px]">
          Також для вас
        </h3>
        <SuggeschionsSwiper />
      </MainContainer>
    </MainSectionsBox>
  );
};

export default page;
