import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-5 lg:gap-10 text-lg md:text-[22px] lg:text-base  font-manrope font-normal text-white  ">
      <Link href="/">Головна</Link>
      <Link href="/">Boxes</Link>
      <Link href="/">Доставка і оплата </Link>
      <Link href="/">Про компанію</Link>
      <Link href="/">Контакти</Link>
    </nav>
  );
};

export default NavBar;
