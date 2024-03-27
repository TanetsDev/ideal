"use client";

import { useState } from "react";

type Langs = "UA" | "RU" | "EN";

const MobLangSwitcher = () => {
  const [lang, setLang] = useState<Langs>("UA");
  const getTextColor = (currentLang: Langs) => {
    return lang === currentLang ? "text-white" : "text-[#828282]";
  };
  return (
    <ul className="flex items-center justify-center pt-[26px] text-lg font-manrope">
      <li
        key={"EN"}
        className={`px-[6px] cursor-pointer ${getTextColor("EN")}`}
        onClick={() => setLang("EN")}
      >
        {"EN"}
      </li>
      <li
        key={"UA"}
        className={`border-x border-[#828282] px-[6px] cursor-pointer ${getTextColor(
          "UA"
        )}`}
        onClick={() => setLang("UA")}
      >
        {"UA"}
      </li>
      <li
        key={"RU"}
        className={` px-[6px] cursor-pointer ${getTextColor("RU")}`}
        onClick={() => setLang("RU")}
      >
        {"RU"}
      </li>
    </ul>
  );
};

export default MobLangSwitcher;
