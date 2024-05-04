import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

const NavBar = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  return (
    <nav className=" flex flex-col xl:flex-row items-center justify-center gap-3 md:gap-5 xl:gap-10 text-lg md:text-[22px]  xl:text-base  font-manrope font-normal text-white  ">
      <Link
        className={pathname === "/" ? "text-[#D6A968] underline" : ""}
        href="/"
        onClick={() => setIsOpen(false)}
      >
        Головна
      </Link>
      <Link
        className={pathname === "/boxes" ? "text-[#D6A968] underline" : ""}
        href="/boxes"
        onClick={() => setIsOpen(false)}
      >
        Boxes
      </Link>
      <Link
        className={
          pathname === "/shipment-payment" ? "text-[#D6A968] underline" : ""
        }
        href="/shipment-payment"
        onClick={() => setIsOpen(false)}
      >
        Доставка і оплата
      </Link>
      <Link
        className={pathname === "/" ? "text-[#D6A968] underline" : ""}
        href="/"
        onClick={() => setIsOpen(false)}
      >
        Про компанію
      </Link>
      <Link
        className={pathname === "/contact" ? "text-[#D6A968] underline" : ""}
        href="/contact"
        onClick={() => setIsOpen(false)}
      >
        Контакти
      </Link>
    </nav>
  );
};

export default NavBar;
