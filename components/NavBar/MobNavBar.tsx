import React from "react";
import NavBar from "./NavBar";
import MobLangSwitcher from "../LangSwitcher/MobLangSwitcher";

const MobNavBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={` h-[100vh] relative overflow-hidden border-t border-white lg:hidden ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className={`bg-blackFooter h-full z-30 pt-[80px]  absolute  left-0 right-0 transition-transform  ${
          isOpen ? "top-o" : "-translate-y-full"
        } `}
      >
        <NavBar />
        <MobLangSwitcher />
      </div>
    </div>
  );
};

export default MobNavBar;
