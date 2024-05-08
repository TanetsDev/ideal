"use client";
import MainContainer from "../Containers/MainContainer";
import Image from "next/image";
import { fbIcon, goldLogo, instaIcon } from "@/public/icons";
import MainGoldBtn from "../Buttons/MainGoldBtn";
import { usePathname } from "next/navigation";

import useModal from "@/hooks/useModal";
import ContactForm from "../Form/ContactForm";
import Modal from "../Modal/Modal";

const Footer = () => {
  const pathname = usePathname();
  const { isModalOpen, openModal, closeModal } = useModal();

  if (pathname.includes("/studio")) return null;

  return (
    <footer className=" bg-blackFooter pt-[50px]  pb-[35px] md:pb-[42px] xl:pb-[68px] xl:pt-[110px]">
      <MainContainer className=" flex flex-col justify-center">
        <Image
          src={goldLogo}
          alt="Логотип компанії"
          width="190"
          height="50"
          className="w-[190px] h-[47px] md:w-[248px] md:h-[62px] xl:hidden self-center"
        />
        <div className="md:flex justify-between ">
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
                onClick={() => openModal()}
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
                    width="190"
                    height="50"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <Image
                    src={instaIcon}
                    alt="Логотип Instagram"
                    className=" size-[30px]"
                    width="190"
                    height="50"
                  />
                </a>
              </div>
            </li>
          </ul>
          <Image
            src={goldLogo}
            alt="Логотип компанії"
            className="hidden xl:block w-[388px] h-[98px]"
            width="190"
            height="50"
          />
          <div>
            <p className="hidden md:block text-white text-sm lg:text-base font-robotoFlex mb-[14px]">
              Напишіть нам
            </p>
            <MainGoldBtn
              blockName="footer"
              text="Зв'язатись"
              handleClick={() => openModal()}
              className="hidden md:block"
            />
            <div className=" flex gap-3 mt-[22px] md:mt-[33px] lg:hidden">
              <a href="https://www.facebook.com/?locale=uk_UA">
                <Image
                  src={fbIcon}
                  alt="Логотип Facebook"
                  className=" size-6"
                  width="190"
                  height="50"
                />
              </a>
              <a href="https://www.instagram.com/">
                <Image
                  src={instaIcon}
                  alt="Логотип Instagram"
                  className=" size-6"
                  width="190"
                  height="50"
                />
              </a>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <Modal>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" cursor-pointer stroke-[#2E2E2E] w-[28px] h-[28px]  md:w-[40px] md:h-[40px]  absolute right-[17px] top-[17px]"
              onClick={closeModal}
              width="50"
              height="50"
            >
              <path d="M6 18 18 6M6 6l12 12" />
            </svg>
            <div className="w-full flex flex-col items-center ">
              <h2 className=" text-[24px] text-center leading-[33px] pb-[30px]">
                Зв`язатись
              </h2>
              <ContactForm />
            </div>
            {/* <div className="bg-white  relative flex justify-center rounded px-[40px]"></div> */}
          </Modal>
        )}
      </MainContainer>
    </footer>
  );
};

export default Footer;
