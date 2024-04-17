"use client";
import MainContainer from "../Containers/MainContainer";
import Image from "next/image";
import { fbIcon, goldLogo, instaIcon } from "@/public/icons";
import MainGoldBtn from "../Buttons/MainGoldBtn";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (pathname.includes("/studio")) return null;
  return (
    <footer className=" bg-blackFooter pt-[30px] md:pt-[44px] pb-[26px] md:pb-[46px] lg:pb-[74px]">
      <MainContainer className=" flex flex-col justify-center">
        <Image
          src={goldLogo}
          alt="Логотип компанії"
          className="w-[190px] h-[47px] md:w-[248px] md:h-[62px] lg:hidden self-center"
        />
        <div className="md:flex justify-between md:mt-[48px] lg:mt-[110px]">
          <ul className="flex flex-col gap-[8px] md:gap-[10px] text-sm lg:text-base font-robotoFlex  text-white mt-[50px] md:mt-0 md:pt-1">
            <li key={1}>
              <p>Київ Русановский бульвар 7</p>
            </li>
            <li key={2}>
              <p>10.00 - 22.00</p>
            </li>
            <li key={3}>
              <a href="tel:+380940001110">380940001110</a>
            </li>
            <li key={4} className="pt-1">
              <a href="mailto:animal.search@ukr.net">animal.search@ukr.net</a>
            </li>
            <li key={5} className="pt-[8px] md:hidden ">
              <button
                type="button"
                className=" cursor-pointer underline"
                onClick={() => console.log("click")}
              >
                Зворотній зв’язок
              </button>
            </li>
            <li className="hidden lg:block lg:mt-[16px]">
              <div className=" hidden lg:flex gap-3">
                <a href="https://www.facebook.com/?locale=uk_UA">
                  <Image
                    src={fbIcon}
                    alt="Логотип Facebook"
                    className=" size-[30px]"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <Image
                    src={instaIcon}
                    alt="Логотип Instagram"
                    className=" size-[30px]"
                  />
                </a>
              </div>
            </li>
          </ul>
          <Image
            src={goldLogo}
            alt="Логотип компанії"
            className="hidden lg:block w-[388px] h-[98px]"
          />
          <div>
            <p className="hidden md:block text-white text-sm lg:text-base font-robotoFlex mb-[14px]">
              Напишіть нам
            </p>
            <MainGoldBtn
              blockName="footer"
              text="Зв'язатись"
              handleClick={() => console.log("Click--")}
              className="hidden md:block"
            />
            <div className=" flex gap-3 mt-[22px] md:mt-[33px] lg:hidden">
              <a href="https://www.facebook.com/?locale=uk_UA">
                <Image
                  src={fbIcon}
                  alt="Логотип Facebook"
                  className=" size-6"
                />
              </a>
              <a href="https://www.instagram.com/">
                <Image
                  src={instaIcon}
                  alt="Логотип Instagram"
                  className=" size-6"
                />
              </a>
            </div>
          </div>
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
