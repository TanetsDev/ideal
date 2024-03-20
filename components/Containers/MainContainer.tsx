import { ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return <div className={"mainContainer"}>{children}</div>;
};

export default MainContainer;
