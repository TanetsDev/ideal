import React from "react";

const Backdrop = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center absolute bottom-0 top-0 left-0 z-50 min-h-full w-full bg-[#323131CC]  overflow-hidden">
      {children}
    </div>
  );
};

export default Backdrop;
