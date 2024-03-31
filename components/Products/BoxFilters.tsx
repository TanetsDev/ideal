import React, { useEffect, useState } from "react";
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

const BoxFilters = ({ isClean }: { isClean: boolean }) => {
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

  const cleanCheckers = () => {
    setAntipastiIsChecked(false);
    setFurIsChecked(false);
    setCoffIsChecked(false);
    setBbqIsChecked(false);
    setCandIsChecked(false);
    setCoctIsChecked(false);
  };

  useEffect(() => {
    if (isClean) {
      cleanCheckers();
    }
  }, [isClean]);

  return (
    <div className="flex flex-col gap-6 py-[16px]">
      <div>
        <FiltersTitle>Тип боксу</FiltersTitle>
        <UnderlineGold />
        <ul className="flex flex-col px-3 gap-3 mt-[22px] text-sm font-manrope">
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
      <div>
        <FiltersTitle>Ціна</FiltersTitle>
        <UnderlineGold />

        <RangeInput from="1" to="100" isClean={isClean} />
      </div>
      <div className=" pt-3">
        <FiltersTitle>Персон</FiltersTitle>
        <UnderlineGold />

        <RangeInput from="1" to="8" isClean={isClean} />
      </div>
    </div>
  );
};

export default BoxFilters;
