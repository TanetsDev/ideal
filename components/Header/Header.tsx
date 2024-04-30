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
  goldLogo,
} from "@/public/icons";
import MobNavBar from "../NavBar/MobNavBar";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  if (pathname.includes("/studio")) return null;

  return (
    <header
      className={`bg-blackFooter h-[64px]  md:h-[80px] w-full absolute xl:fixed z-50`}
    >
      <div className="flex items-center justify-between px-[16px] md:px-5 xl:px-[72px] w-full h-full">
        <div className=" pr-5 xl:hidden">
          <Image
            src={burgerIcon}
            alt="Бургер меню"
            className=" size-[40px] md:size-[50px]"
            onClick={() => setIsOpen((prev) => !prev)}
            width="50"
            height="50"
          />
        </div>
        {pathname === "/" ? (
          <Image
            src={headerWhiteLogo}
            alt="Лого компанії"
            className=" w-[122px] h-[29px] md:w-[160px] md:h-[41px] xl:w-[133px] xl:h-[33px]"
            width="122"
            height="30"
          />
        ) : (
          <Image
            src={goldLogo}
            alt="Лого компанії"
            className=" w-[122px] h-[29px] md:w-[160px] md:h-[41px] xl:w-[133px] xl:h-[33px]"
            width="122"
            height="30"
          />
        )}
        <div className=" flex gap-[72px]">
          <div className=" hidden xl:block">
            <NavBar setIsOpen={setIsOpen} />
          </div>
          <div className="flex gap-[14px] md:gap-4 xl:gap-[18px]">
            <span className=" hidden xl:inline">
              <LangSwitcher />
            </span>
            <Link href={"/cart"}>
              <Image
                src={bucketIcon}
                alt="іконка корзини"
                className=" size-[26px] md:size-[30px]"
                width="50"
                height="50"
              />
            </Link>
            {/* <Link href={"/sign_in"}>
              <Image
                src={userIcon}
                alt="Особистий кабінет"
                className=" size-[26px] md:size-[30px]"
              />
            </Link> */}

            <Link href={"/personal_office"}>
              <Image
                src={userIcon}
                alt="Особистий кабінет"
                className=" size-[26px] md:size-[30px]"
                width="50"
                height="50"
              />
            </Link>
          </div>
        </div>
      </div>
      <MobNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
