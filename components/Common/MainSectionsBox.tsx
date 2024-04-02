import React, { ReactNode } from "react";

const MainSectionsBox = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`pt-[50px] md:pt-[70px] bg-#F9F9F9 lg:bg-#f5f5f5 ${className}`}
    >
      {children}
    </section>
  );
};

export default MainSectionsBox;
