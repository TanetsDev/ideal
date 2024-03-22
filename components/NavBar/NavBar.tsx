import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className=" items-center justify-center gap-10 text-base font-manrope font-normal text-white hidden lg:flex">
      <Link href="/">Головна</Link>
      <Link href="/">Boxes</Link>
      <Link href="/">Доставка і оплата </Link>
      <Link href="/">Про компанію</Link>
      <Link href="/">Контакти</Link>
    </nav>
  );
};

export default NavBar;
