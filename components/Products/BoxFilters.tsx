import React, { Dispatch, SetStateAction, useState } from "react";
import UnderlineGold from "../UnderlineGold/UnderlineGold";
import Image from "next/image";
import { checkBox, checkBoxChecked } from "@/public/icons";
import FiltersTitle from "../Common/FiltersTitle";
import RangeInput from "../RangeInput/RangeInput";
const filters: string[] = [
  "Антіпасті",
  "Фуршет бокс",
  "Кава-брейк бокс",
  "Барбекю бокс",
  "Десерт бокс",
  "Коктейль бокс",
];

const BoxFilters = ({
  setIsFiltersOpen,
}: {
  setIsFiltersOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isAntipastiChecked, setAntipastiIsChecked] = useState<boolean>(false);
  const [isFurChecked, setFurIsChecked] = useState<boolean>(false);
  const [isCoffChecked, setCoffIsChecked] = useState<boolean>(false);
  const [isBbqChecked, setBbqIsChecked] = useState<boolean>(false);
  const [isCandChecked, setCandIsChecked] = useState<boolean>(false);
  const [isCoctChecked, setCoctIsChecked] = useState<boolean>(false);

  const [isClean, setIsClean] = useState<boolean>(false);

  const checkers = [
    isAntipastiChecked,
    isFurChecked,
    isCoffChecked,
    isBbqChecked,
    isCandChecked,
    isCoctChecked,
  ];

  const toggleCheck = (i: number) => {
    const setters = [
      setAntipastiIsChecked,
      setFurIsChecked,
      setCoffIsChecked,
      setBbqIsChecked,
      setCandIsChecked,
      setCoctIsChecked,
    ];

    setters[i]((prev) => !prev);
  };

  const cleanCheckers = () => {
    setIsClean((prev) => !prev);
    setAntipastiIsChecked(false);
    setFurIsChecked(false);
    setCoffIsChecked(false);
    setBbqIsChecked(false);
    setCandIsChecked(false);
    setCoctIsChecked(false);
  };

  return (
    <div className="xl:hidden flex flex-col gap-6 md:gap-0 py-[16px] md:pt-[22px] md:pb-[32px]  bg-white md:mt-[31px] md:mb-[74px]">
      <div className="flex px-3 md:px-[27px] md:mb-[46px] gap-6 md:gap-[14px] justify-center text-lg md:text-2xl font-manrope font-medium xl:hidden">
        <span>Фільтри</span>
        <button
          type="button"
          className=" text-darkViolet"
          onClick={() => cleanCheckers()}
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
      <div>
        <FiltersTitle>Тип боксу</FiltersTitle>
        <UnderlineGold />
        <ul className="flex flex-col  px-3 md:px-[27px] gap-3 mt-[22px] md:mt-[14px] text-sm md:text-base font-manrope">
          {filters.map((f, i) => (
            <li
              key={i}
              className=" flex justify-between items-center text-basicBlack"
            >
              <span>{f}</span>
              {!checkers[i] ? (
                <Image
                  src={checkBox}
                  alt="чекбокс"
                  onClick={() => toggleCheck(i)}
                  className=" size-[22px]"
                />
              ) : (
                <Image
                  src={checkBoxChecked}
                  alt="чекбокс"
                  onClick={() => toggleCheck(i)}
                  className=" size-[22px]"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className=" md:mt-8">
        <FiltersTitle>Ціна</FiltersTitle>
        <UnderlineGold />

        <RangeInput from="1" to="100" isClean={isClean} />
      </div>
      <div className=" pt-3 md:mt-[43px]">
        <FiltersTitle>Персон</FiltersTitle>
        <UnderlineGold />

        <RangeInput from="1" to="8" isClean={isClean} />
      </div>
    </div>
  );
};

export default BoxFilters;
