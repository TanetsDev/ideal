import React, { Dispatch, FC, SetStateAction, useState } from "react";
import UnderlineGold from "../UnderlineGold/UnderlineGold";
import Image from "next/image";
import { checkBox, checkBoxChecked } from "@/public/icons";
import FiltersTitle from "../Common/FiltersTitle";
import RangeInput from "../RangeInput/RangeInput";
import { BoxTypes } from "@/types/sanityData.types";

type Props = {
  setIsFiltersOpen: Dispatch<SetStateAction<boolean>>;
  types: BoxTypes[] | null;
  checkedFilters: string[];
  setCheckedFilters: Dispatch<SetStateAction<string[]>>;
};

const BoxFilters: FC<Props> = ({
  setIsFiltersOpen,
  types,
  checkedFilters,
  setCheckedFilters,
}) => {
  const [isClean, setIsClean] = useState<boolean>(false);

  const toggleCheck = (id: string, type: "add" | "del") => {
    if (type === "add") {
      setCheckedFilters((prev) => [...prev, id]);
    } else {
      setCheckedFilters((prev) => [...prev.filter((val) => val !== id)]);
    }
  };

  const cleanCheckers = () => {
    setCheckedFilters([]);
    setIsClean(true);
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
          {types &&
            types.map((type) => (
              <li
                key={type._id}
                className=" flex justify-between items-center text-basicBlack"
              >
                <span>{type.value[0].value}</span>
                {!checkedFilters.includes(type._id) ? (
                  <Image
                    src={checkBox}
                    alt="чекбокс"
                    onClick={() => toggleCheck(type._id, "add")}
                    className=" size-[22px]"
                  />
                ) : (
                  <Image
                    src={checkBoxChecked}
                    alt="чекбокс"
                    onClick={() => toggleCheck(type._id, "del")}
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
