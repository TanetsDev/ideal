import React, { ReactNode } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface ListItemProps {
  title: string;
  isOpen: boolean;
  toggleList: () => void;
  children?: ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  isOpen,
  toggleList,
  children,
}) => (
  <li className="pb-[10px]">
    <div
      onClick={toggleList}
      className="flex items-center justify-between font-manrope  hover:cursor-pointer"
    >
      <h3
        className={`text-[16px] leading-[22px] hover:text-darkViolet hover:cursor-pointer ${
          isOpen ? "text-darkViolet text-[18px] leading-[25px]" : ""
        }`}
      >
        {title}
      </h3>
      {isOpen ? (
        <IoIosArrowUp className="fill-[#141414]  xl:hidden" />
      ) : (
        <IoIosArrowDown className="fill-[#141414]  xl:hidden" />
      )}
    </div>

    {isOpen && (
      <div
        className={`pt-[15px] pb-[15px]  xl:absolute top-[96px] left-[430px]  xl:w-[830px] xl:max-w-[830px]`}
      >
        {children}
      </div>
    )}
  </li>
);
export default ListItem;
