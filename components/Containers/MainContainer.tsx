import { ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-[16px] md:px-5 lg:px-[72px] w-full h-full">
      {children}
    </div>
  );
};

export default MainContainer;
