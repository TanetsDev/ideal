import React, { ReactNode } from "react";

const Title = ({
  children,
  className,
}: {
  children?: ReactNode;
  className: any;
}) => {
  return (
    <h2
      className={` text-basicBlack text-[26px] md:text-[30px] lg:text-[40px] font-manrope ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
