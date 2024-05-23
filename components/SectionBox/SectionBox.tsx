"use client";

import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import MainSectionsBox from "@/components/Common/MainSectionsBox";
import MainContainer from "@/components/Containers/MainContainer";
import BoxPreviewCard from "@/components/Products/BoxPreviewCard";
import SuggeschionsSwiper from "@/components/Swipers/SuggeschionsSwiper";
import { selectBoxesState } from "@/redux/boxes/boxesSelector";
import { IBreadCrumb } from "@/types/market.types";
import { BoxDTO } from "@/types/sanityData.types";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SectionBox = () => {
  const router = useRouter();
  const { data } = useSelector(selectBoxesState);

  const params = useParams();

  const [crmbs, setCrmbs] = useState<IBreadCrumb[]>([
    { name: "Головна", path: "/" },
    { name: "Shop", path: "/boxes" },
  ]);

  useEffect(() => {
    if (!data) {
      router.push("/");
    } else if (params.id) {
      const boxId = params.id;
      const box = data.find((e: BoxDTO) => e._id === params.id);
      const boxTitle =
        box?.title?.find(({ _key }: { _key: string }) => _key === "ukr")
          ?.value || " ";

      setCrmbs((prevCrmbs) => {
        if (!prevCrmbs.some((crumb) => crumb.name === boxTitle)) {
          return [
            ...prevCrmbs,
            {
              name: boxTitle,
              path: `/boxes/${boxId}`,
            },
          ];
        }
        return prevCrmbs;
      });
    }
  }, [params.id, data, router]);
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
