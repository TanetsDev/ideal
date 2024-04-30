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
  <li className="pb-[10px]  gap-[15px] ">
    <div
      onClick={toggleList}
      className="flex items-center justify-between font-manrope  hover:cursor-pointer"
    >
      <h3
        className={`text-[16px] leading-[22px] hover:text-darkViolet hover:cursor-pointer ${
          isOpen ? "text-darkViolet " : ""
        }`}
      >
        {title}
      </h3>
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="stroke-[#141414]  xl:hidden w-5 h-5"
        >
          <path d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[#141414]  xl:hidden w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>

        // <IoIosArrowDown className="fill-[#141414]  xl:hidden" />
      )}
    </div>

    {isOpen && (
      <div
        className={`pt-[15px] pb-[15px]  
      
        xl:absolute  top-[96px] left-[430px]  xl:w-full xl:max-w-[830px]
      `}
      >
        {children}
      </div>
    )}
  </li>
);
export default ListItem;
