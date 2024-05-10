import React, { Dispatch, SetStateAction } from "react";
import NavBar from "./NavBar";
import MobLangSwitcher from "../LangSwitcher/MobLangSwitcher";

const MobNavBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={` h-[100vh] relative overflow-hidden border-t border-white xl:hidden ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className={`bg-blackFooter h-full z-30 pt-[80px]  absolute  left-0 right-0 transition-transform  ${
          isOpen ? "top-o" : "-translate-y-full"
        } `}
      >
        <NavBar setIsOpen={setIsOpen} />
        <MobLangSwitcher />
      </div>
    </div>
  );
};

export default MobNavBar;
