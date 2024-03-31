import React, { ReactNode } from "react";

const FiltersTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="font-manrope font-medium text-base mb-3">{children}</h3>
  );
};

export default FiltersTitle;
