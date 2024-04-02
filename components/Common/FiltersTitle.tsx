import React, { ReactNode } from "react";

const FiltersTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="font-manrope font-medium text-base mb-3 px-3 md:text-xl lg:px-[24px]">
      {children}
    </h3>
  );
};

export default FiltersTitle;
