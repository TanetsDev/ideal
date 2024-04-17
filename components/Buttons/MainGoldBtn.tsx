"use client";

import { ReactNode } from "react";

const getBtnSize = (blockName: string) => {
  switch (blockName) {
    case "ideal":
      return "w-[343px] h-[45px] md:w-[162px] md:h-[40px]";

    case "footer":
      return "w-[126px] lg:w-[144px] h-[40px] lg:h-[44px]";

    case "boxDetails":
      return "w-[343px]  h-[40px] md:w-[144px] ";

    case "CartModal":
      return "w-full  h-[54px]  md:w-[182px] md:h-[40px]";

    default:
      return "";
  }
};

interface IProps {
  text?: string;
  blockName: string;
  bordered?: boolean;
  handleClick: () => void;
  className?: string;
  children?: ReactNode;
}

const MainGoldBtn = ({
  text,
  blockName,
  bordered = false,
  handleClick,
  className,
  children,
}: IProps) => {
  if (bordered)
    return (
      <div
        className={`${getBtnSize(
          blockName
        )} flex items-center justify-center bg-goldPrimaryBtn rounded p-[1px]`}
      >
        <button
          type="button"
          onClick={handleClick}
          className={`w-full h-full flex items-center justify-center bg-cardBacsic text-sm font-robotoFlex text-basicBlack rounded`}
        >
          {text && text}
          {children && children}
        </button>
      </div>
    );

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${getBtnSize(
        blockName
      )}  flex items-center justify-center bg-goldPrimaryBtn text-sm font-robotoFlex text-basicBlack rounded ${className}`}
    >
      {text && text}
      {children && children}
    </button>
  );
};

export default MainGoldBtn;
