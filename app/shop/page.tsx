"use client";

import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import MainSectionsBox from "@/components/Common/MainSectionsBox";
import Title from "@/components/Common/Title";
import MainContainer from "@/components/Containers/MainContainer";
import BoxFilters from "@/components/Products/BoxFilters";
import BoxList from "@/components/Products/BoxList";
import { arrDown, arrUp, filterIcon } from "@/public/icons";
import { IBreadCrumb } from "@/types/market.types";
import { IBox } from "@/types/products.types";
import Image from "next/image";
import { useState } from "react";
const crmbs: IBreadCrumb[] = [
  { name: "Головна", path: "/" },
  { name: "Shop", path: "/shop" },
];
const boxes: IBox[] = [
  {
    id: 1,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
    type: "normal",
  },
  {
    id: 2,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
    type: "hit",
  },
  {
    id: 4,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
    type: "top",
  },
  {
    id: 6,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
    type: "new",
  },
  {
    id: 7,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
    type: "normal",
  },
];
const ShopPage = () => {
  const [crumbs] = useState<IBreadCrumb[]>(crmbs);
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [isClean, setIsClean] = useState<boolean>(false);

  return (
    <main>
      <MainSectionsBox className=" pt-[64px] pb-[50px]">
        <MainContainer className="flex flex-col justify-center">
          <BreadCrumbs crumps={crumbs} />
          <div className="flex flex-col gap-[28px] mb-6">
            <Title isMain className="text-center mt-[36px]">
              Ідеальні бокси
            </Title>
            {!isFiltersOpen ? (
              <button
                type="button"
                className="flex items-center justify-center gap-1 text-darkViolet"
                onClick={() => setIsFiltersOpen((prev) => !prev)}
              >
                Фільтри
                <Image
                  src={filterIcon}
                  alt="Іконка фільтру"
                  className=" fill-darkViolet size-[18px]"
                />
              </button>
            ) : (
              <div className="flex  gap-6 justify-center text-lg font-manrope font-medium">
                <span>Фільтри</span>
                <button
                  type="button"
                  className=" text-darkViolet"
                  onClick={() => setIsClean(true)}
                >
                  Скинути всі
                </button>
                <button
                  type="button"
                  className=" text-darkViolet"
                  onClick={() => setIsFiltersOpen((prev) => !prev)}
                >
                  Закрити
                </button>
              </div>
            )}
            {isFiltersOpen && <BoxFilters isClean={isClean} />}
            <div className="flex gap-[26px]">
              <button type="button">Скинути</button>
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

          <BoxList boxes={boxes} section="shop" />
        </MainContainer>
      </MainSectionsBox>
    </main>
  );
};

export default ShopPage;
