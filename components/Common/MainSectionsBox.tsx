import React, { ReactNode } from "react";

const MainSectionsBox = ({ children }: { children: ReactNode }) => {
  return (
    <section className=" pt-[50px] md:pt-[70px] bg-#F9F9F9">{children}</section>
  );
};

export default MainSectionsBox;
