import React, { Dispatch, FC, SetStateAction } from "react";
import UnderlineGold from "../UnderlineGold/UnderlineGold";
import Image from "next/image";
import { checkBox, checkBoxChecked } from "@/public/icons";
import FiltersTitle from "../Common/FiltersTitle";
import RangeInput from "../RangeInput/RangeInput";
import { BoxTypes } from "@/types/sanityData.types";

type Props = {
  types: BoxTypes[] | null;
  isCleaned: boolean;
  checkedFilters: string[];
  setCheckedFilters: Dispatch<SetStateAction<string[]>>;
};
const BoxDesktopFilters: FC<Props> = ({
  types,
  isCleaned,
  checkedFilters,
  setCheckedFilters,
}) => {
  const toggleCheck = (id: string, type: "add" | "del") => {
    if (type === "add") {
      setCheckedFilters((prev) => [...prev, id]);
    } else {
      setCheckedFilters((prev) => [...prev.filter((val) => val !== id)]);
    }
  };

  return (
    <div className=" flex-col gap-[30px] hidden xl:flex">
      <div className="pt-[14px] pb-6 bg-white">
        <FiltersTitle>Тип боксу</FiltersTitle>
        <UnderlineGold />
        <ul className="flex flex-col px-[24px] gap-[10px] mt-[24px] text-base font-manrope">
          {types &&
            types.map((type) => (
              <li
                key={type._id}
                className=" flex items-center gap-[8px] text-basicBlack"
              >
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
                <span>{type.value[0].value}</span>
              </li>
            ))}
        </ul>
      </div>
      <div className="pt-[14px] pb-6 bg-white">
        <FiltersTitle>Ціна</FiltersTitle>
        <UnderlineGold isGrey />

        <RangeInput from="1" to="100" isClean={isCleaned} />
      </div>
      <div className=" pt-[14px] pb-6 bg-white">
        <FiltersTitle>Персон</FiltersTitle>
        <UnderlineGold isGrey={true} />
        <RangeInput from="1" to="8" isClean={isCleaned} />
      </div>
    </div>
  );
};

export default BoxDesktopFilters;
