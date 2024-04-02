import React from "react";

const UnderlineGold = ({ isGrey }: { isGrey?: boolean }) => {
  return (
    <div
      className={`h-[1px] w-full ${
        isGrey ? " bg-basicGrey" : "bg-goldPrimaryBtn"
      } `}
    ></div>
  );
};

export default UnderlineGold;
