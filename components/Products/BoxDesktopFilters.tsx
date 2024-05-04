import React, { useState } from "react";
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

const BoxDesktopFilters = () => {
  const [isAntipastiChecked, setAntipastiIsChecked] = useState<boolean>(false);
  const [isFurChecked, setFurIsChecked] = useState<boolean>(false);
  const [isCoffChecked, setCoffIsChecked] = useState<boolean>(false);
  const [isBbqChecked, setBbqIsChecked] = useState<boolean>(false);
  const [isCandChecked, setCandIsChecked] = useState<boolean>(false);
  const [isCoctChecked, setCoctIsChecked] = useState<boolean>(false);

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

  return (
    <div className=" flex-col gap-[30px] hidden xl:flex">
      <div className="pt-[14px] pb-6 bg-white">
        <FiltersTitle>Тип боксу</FiltersTitle>
        <UnderlineGold />
        <ul className="flex flex-col px-[24px] gap-[10px] mt-[24px] text-base font-manrope">
          {filters.map((f, i) => (
            <li
              key={i}
              className=" flex items-center gap-[8px] text-basicBlack"
            >
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
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-[14px] pb-6 bg-white">
        <FiltersTitle>Ціна</FiltersTitle>
        <UnderlineGold isGrey />

        <RangeInput from="1" to="100" />
      </div>
      <div className=" pt-[14px] pb-6 bg-white">
        <FiltersTitle>Персон</FiltersTitle>
        <UnderlineGold isGrey={true} />
        <RangeInput from="1" to="8" />
      </div>
    </div>
  );
};

export default BoxDesktopFilters;
