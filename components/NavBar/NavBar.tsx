import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

const NavBar = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-5 lg:gap-10 text-lg md:text-[22px] lg:text-base  font-manrope font-normal text-white  ">
      <Link href="/" onClick={() => setIsOpen(false)}>
        Головна
      </Link>
      <Link href="/boxes" onClick={() => setIsOpen(false)}>
        Boxes
      </Link>
      <Link href="/shipment-payment" onClick={() => setIsOpen(false)}>
        Доставка і оплата
      </Link>
      <Link href="/" onClick={() => setIsOpen(false)}>
        Про компанію
      </Link>
      <Link href="/contact" onClick={() => setIsOpen(false)}>
        Контакти
      </Link>
    </nav>
  );
};

export default NavBar;
