"use client";

import { usePathname } from "next/navigation";
import NavBar from "../NavBar/NavBar";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import Image from "next/image";
import {
  // bucketIcon,
  headerWhiteLogo,
  // userIcon,
  burgerIcon,
  goldLogo,
} from "@/public/icons";
import MobNavBar from "../NavBar/MobNavBar";
import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import authSelector from "@/redux/auth/authSelector";

import { CiShoppingBasket } from "react-icons/ci";
import { BiUser } from "react-icons/bi";

const Header = () => {
  const pathname = usePathname();
  const token = useSelector(authSelector.selectToken);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  if (pathname.includes("/studio")) return null;

  // const router = useRouter();

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
        <div className=" flex gap-[72px] ">
          <div className=" hidden xl:flex items-center">
            <NavBar setIsOpen={setIsOpen} />
          </div>
          <div className="flex gap-[14px] md:gap-4 xl:gap-[18px] items-center">
            <span className=" hidden xl:inline">
              <LangSwitcher />
            </span>
            <Link
              href={"/cart"}
              className={
                pathname === "/cart" ? "text-[#D6A968]  " : "text-[#FFFFFF]"
              }
              onClick={() => setIsOpen(false)}
            >
              {/* <Image
                src={bucketIcon}
                alt="іконка корзини"
                className=" size-[26px] md:size-[30px]"
                width="50"
                height="50"
              /> */}
              <CiShoppingBasket className=" hover:text-[#D6A968] stroke-[0.6px] size-[26px] md:size-[30px]" />
            </Link>

            {token ? (
              <Link
                href={"/personal_office"}
                className={
                  pathname === "/personal_office"
                    ? "text-[#D6A968] "
                    : "text-[#FFFFFF]"
                }
                onClick={() => setIsOpen(false)}
              >
                {/* <Image
                  src={userIcon}
                  alt="Особистий кабінет"
                  className=" size-[26px] md:size-[30px]"
                  width="50"
                  height="50"
                /> */}
                <BiUser className=" hover:text-[#D6A968] size-[26px] md:size-[30px]" />
              </Link>
            ) : (
              <Link
                href={"/sign_in"}
                className={
                  pathname === "/sign_in" ? "text-[#D6A968] " : "text-[#FFFFFF]"
                }
                onClick={() => setIsOpen(false)}
              >
                {/* <Image
                  src={userIcon}
                  alt="Особистий кабінет"
                  className=" size-[26px] md:size-[30px]"
                  width="50"
                  height="50"
                /> */}
                <BiUser className="hover:text-[#D6A968]  size-[26px] md:size-[30px]" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <MobNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
