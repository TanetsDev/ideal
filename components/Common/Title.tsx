import React, { ReactNode } from "react";

const Title = ({
  children,
  className,
  isMain,
}: {
  children?: ReactNode;
  className: any;
  isMain?: boolean;
}) => {
  if (isMain) {
    return (
      <h1
        className={` text-basicBlack text-[26px] md:text-[30px] lg:text-[40px] font-manrope ${className}`}
      >
        {children}
      </h1>
    );
  }

  return (
    <h2
      className={` text-basicBlack text-[26px] md:text-[30px] lg:text-[40px] font-manrope ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
