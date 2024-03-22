"use client";

import { useState } from "react";
import Image from "next/image";
import { arrowDownIcon, iconUp } from "@/public/icons";

type Langs = "UA" | "RU" | "EN";

const LangSwitcher = () => {
  const [lang, setLang] = useState<Langs>("UA");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const langsArr: Langs[] = ["UA", "RU", "EN"];

  return (
    <div className=" text-lg text-white font-manrope flex items-center">
      <div className=" relative">
        <span>{lang}</span>
        {isOpen && (
          <ul className=" absolute top-[25px] left-[-3px] p-1">
            {langsArr.map((lang) => (
              <li
                key={lang}
                onClick={() => {
                  setLang(lang);
                  setIsOpen((prev) => !prev);
                }}
                className=" cursor-pointer hover:text-amber-300"
              >
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>

      <span
        onClick={() => setIsOpen((prev) => !prev)}
        className=" cursor-pointer"
      >
        {!isOpen ? (
          <Image src={arrowDownIcon} alt="Вниз" className=" size-[22px]" />
        ) : (
          <Image src={iconUp} alt="Вниз" className=" size-[22px]" />
        )}
      </span>
    </div>
  );
};

export default LangSwitcher;
