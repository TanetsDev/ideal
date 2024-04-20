import React, { ReactNode } from "react";

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
      <svg width="20px" height="20px" className="fill-[#141414]  xl:hidden">
        <use
          href={
            isOpen ? "/symbol-defs.svg#arrow_up" : "/symbol-defs.svg#arrow_down"
          }
        ></use>
      </svg>
    </div>

    {isOpen && (
      <ul
        className={`pt-[15px] pb-[15px] md:max-w-[350px] xl:absolute top-[96px] left-[430px] xl:w-[830px] xl:max-w-[830px]`}
      >
        {children}
      </ul>
    )}
  </li>
);
export default ListItem;
