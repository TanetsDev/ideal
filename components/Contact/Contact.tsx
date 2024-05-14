import Link from "next/link";
import MainContainer from "../Containers/MainContainer";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import ContactForm from "../Form/ContactForm";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { IBreadCrumb } from "@/types/market.types";

const Contact = () => {
  const crmbs: IBreadCrumb[] = [
    { name: "Головна", path: "/" },
    { name: "Контакти", path: "/contact" },
  ];
  return (
    <section className=" pt-[64px] md:pt-[80px]  pb-[119px]   md:pb-[70px]  md:bg-[#F9F9F9]  ">
      <MainContainer>
        <BreadCrumbs crumps={crmbs} />
        <div className=" pt-[24px]  md:pt-[32px]  md:pb-[70px]  ">
          <h2 className=" text-basicBlack font-manrope text-[26px] leading-[36px] pb-[28px] md:pb-[46px] font-normal">
            Контакти
          </h2>
          <div className="  md:flex  ">
            <ul className=" md:w-[294px] xl:w-[416px] md:bg-[#F4F4F4]  flex flex-col gap-[22px] text-basicBlack font-robotoFlex md:p-[8px] xl:p-[12px]  md:pt-[14px]  xl:pt-[30px]">
              <li>
                <h3 className="text-[14px] leading-[28px] font-medium pb-[6px]">
                  Адреса
                </h3>
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/%D0%A0%D1%83%D1%81%D0%B0%D0%BD%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9+%D0%B1%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80,+7,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.43877,30.5845098,15z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf8be4aa83b1:0x9df7ff409e9cc696!8m2!3d50.4387705!4d30.5948095!16s%2Fg%2F1tf85lx8?entry=ttu"
                >
                  Київ Русановский бульвар 7
                </Link>
              </li>
              <li>
                <h3 className="text-[14px] leading-[28px] font-medium pb-[6px]">
                  Графік роботи
                </h3>
                <p className=" text-[16px] leading-[19px] font-normal ">
                  10.00 - 22.00
                </p>
              </li>
              <li>
                <h3 className="text-[14px] leading-[28px] font-medium pb-[6px]">
                  Телефон
                </h3>
                <Link
                  className=" text-[16px] leading-[19px] font-normal "
                  href="tel:+380940001110"
                >
                  +380940001110
                </Link>
              </li>
              <li>
                <h3 className="text-[14px] leading-[28px] font-medium pb-[6px]">
                  E-mail
                </h3>
                <Link
                  className=" text-[16px] leading-[19px] font-normal "
                  href="mailto:animal.search@ukr.net"
                >
                  animal.search@ukr.net
                </Link>
              </li>
              <li>
                <h3 className="text-[14px] leading-[28px] font-medium pb-[6px]">
                  Завітайте до нас
                </h3>
                <div className=" flex items-center gap-[12px] ">
                  <Link
                    className="  text-[16px] leading-[19px] font-normal  "
                    href="#"
                  >
                    <FaFacebook className=" w-[24px] h-[24px]  text-[#E5A14B] hover:text-[#FDD559] " />
                  </Link>
                  <Link
                    className=" text-[16px] leading-[19px] font-normal   "
                    href="#"
                  >
                    <FaInstagram className="   w-[24px] h-[24px] text-[#E5A14B] hover:text-[#FDD559]  " />
                  </Link>
                </div>
              </li>
            </ul>
            <div className=" md:mx-auto hidden md:flex max-w-[300px] xl:max-w-[350px] w-full pt-[14px] pb-[20px] xl:pt-[30px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default Contact;
