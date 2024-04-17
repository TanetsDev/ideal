import React from "react";

const Backdrop = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" absolute top-0 left-0 z-50 min-h-screen w-screen bg-[#323131CC] px-8 py-[100px] overflow-hidden">
      {children}
    </div>
  );
};

export default Backdrop;
