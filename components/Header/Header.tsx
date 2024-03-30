"use client";

import { usePathname } from "next/navigation";
import NavBar from "../NavBar/NavBar";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import Image from "next/image";
import {
  bucketIcon,
  headerWhiteLogo,
  userIcon,
  burgerIcon,
} from "@/public/icons";
import MobNavBar from "../NavBar/MobNavBar";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const headerBgC = pathname === "/" ? "bg-transparent" : "bg-blackFooter";

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header
      className={`${headerBgC} h-[64px]  md:h-[80px] w-full absolute lg:fixed z-50`}
    >
      <div className="flex items-center justify-between px-[16px] md:px-5 lg:px-[72px] w-full h-full">
        <div className=" pr-5 lg:hidden">
          <Image
            src={burgerIcon}
            alt="Бургер меню"
            className=" size-[40px] md:size-[50px]"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
        <Image
          src={headerWhiteLogo}
          alt="Лого компанії"
          className=" w-[122px] h-[29px] md:w-[160px] md:h-[41px] lg:w-[133px] lg:h-[33px]"
        />
        <div className=" flex gap-[72px]">
          <div className=" hidden lg:block">
            <NavBar />
          </div>
          <div className="flex gap-[14px] md:gap-4 lg:gap-[18px]">
            <span className=" hidden lg:inline">
              <LangSwitcher />
            </span>
            <Image
              src={bucketIcon}
              alt="іконка корзини"
              className=" size-[26px] md:size-[30px]"
            />
            <Image
              src={userIcon}
              alt="Особистий кабінет"
              className=" size-[26px] md:size-[30px]"
            />
          </div>
        </div>
      </div>
      <MobNavBar isOpen={isOpen} />
    </header>
  );
};

export default Header;
