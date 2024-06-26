"use client";

import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import MainSectionsBox from "@/components/Common/MainSectionsBox";
import Title from "@/components/Common/Title";
import MainContainer from "@/components/Containers/MainContainer";
import BoxDesktopFilters from "@/components/Products/BoxDesktopFilters";
import BoxFilters from "@/components/Products/BoxFilters";
import BoxList from "@/components/Products/BoxList";
import { arrDown, arrUp, filterIcon } from "@/public/icons";
import {
  selectBoxTypesData,
  selectBoxesState,
} from "@/redux/boxes/boxesSelector";

import { IBreadCrumb } from "@/types/market.types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const crmbs: IBreadCrumb[] = [
  { name: "Головна", path: "/" },
  { name: "Shop", path: "/boxes" },
];

const BoxesMarket = () => {
  const [crumbs] = useState<IBreadCrumb[]>(crmbs);
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [isCleaned, setIsCleaned] = useState<boolean>(false);

  const [checkedFilters, setCheckedFilters] = useState<string[]>([]);

  const router = useRouter();
  const { data } = useSelector(selectBoxesState);
  const { types } = useSelector(selectBoxTypesData);

  useEffect(() => {
    if (!data || data.length === 0) {
      router.push("/");
    }
  }, [data, router]);

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <MainSectionsBox className=" pt-[64px] pb-[50px]">
      <MainContainer className="flex flex-col justify-center">
        <BreadCrumbs crumps={crumbs} />
        <div className="flex flex-col gap-[28px] md:gap-0 mb-6 md:mb-[20px] mt-[36px] md:mt-[22px]">
          <Title isMain className="text-center ">
            Ідеальні бокси
          </Title>
          {isFiltersOpen && (
            <BoxFilters
              setIsFiltersOpen={setIsFiltersOpen}
              types={types}
              checkedFilters={checkedFilters}
              setCheckedFilters={setCheckedFilters}
            />
          )}
          <div className="flex flex-col md:flex-row md:justify-center md:mt-[46px] gap-[24px]">
            {!isFiltersOpen && (
              <button
                type="button"
                className="flex items-center justify-center gap-1 text-darkViolet md:text-basicBlack xl:hidden text-xl font-manrope font-medium"
                onClick={() => setIsFiltersOpen((prev) => !prev)}
              >
                Фільтри
                <Image
                  src={filterIcon}
                  alt="Іконка фільтру"
                  className="size-[18px]  fill-darkViolet md:fill-black "
                />
              </button>
            )}

            <div className=" flex gap-[26px] md:gap-[15px] justify-center md:flex-grow md:justify-end text-base font-robotoFlex">
              <button
                type="button"
                onClick={() => {
                  setIsCleaned(true);
                  setCheckedFilters([]);
                }}
              >
                Скинути
              </button>
              <button type="button" className="flex items-center gap-[1px]">
                Ціна
                <Image src={arrDown} alt="Стрілка вниз" height={14} />
              </button>
              <button type="button" className="flex items-center gap-[1px]">
                Ціна
                <Image src={arrUp} alt="Стрілка вгору" height={14} />
              </button>
              <button type="button">Популярне</button>
            </div>
          </div>
        </div>
        <div
          className="xl:flex
        xl:gap-[64px]
        xl:justify-between
        "
        >
          <BoxDesktopFilters
            types={types}
            isCleaned={isCleaned}
            checkedFilters={checkedFilters}
            setCheckedFilters={setCheckedFilters}
          />
          <BoxList boxes={data} section="shop" />
        </div>
      </MainContainer>
    </MainSectionsBox>
  );
};

export default BoxesMarket;
