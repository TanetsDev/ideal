import { ReactNode } from "react";

const MainContainer = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`px-[16px] md:px-5 lg:px-[72px] w-full  ${className} `}
      // h-full
    >
      {children}
    </div>
  );
};

export default MainContainer;
