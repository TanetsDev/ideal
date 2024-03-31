import React, { useEffect, useState } from "react";

const RangeInput = ({
  from,
  to,
  isClean,
}: {
  from: string;
  to: string;
  isClean: boolean;
}) => {
  const [fromValue, setFromValue] = useState<string>(from);
  const [toValue, setToValue] = useState<string>(to);
  const fromMax = (Number(to) / 2).toString();

  useEffect(() => {
    if (isClean) {
      setFromValue(from);
      setToValue(to);
    }
  }, [from, isClean, to]);

  return (
    <div>
      <div className="mt-[22px] mb-[30px] px-3  flex items-center">
        <input
          type="text"
          value={fromValue}
          className="pl-[14px] w-[67px] h-[34px] border border-[#D8D8D8] shadow-sm rounded mr-1"
          onChange={() => {}}
        />
        {"-"}
        <input
          type="text"
          value={toValue}
          className="pl-[14px] w-[67px] h-[34px] border border-[#D8D8D8] shadow-sm rounded ml-1"
          onChange={() => {}}
        />
        <button
          type="button"
          className="flex items-center justify-center w-[50px] h-[34px] border border-[#D8D8D8] shadow-sm rounded ml-[15px] "
        >
          OK
        </button>
      </div>

      <div className="w-full flex">
        <input
          id="fromSlider"
          type="range"
          value={fromValue}
          min={from}
          max={fromMax}
          onChange={(e) => {
            setFromValue(e.currentTarget.value);
            console.log("from value", e.currentTarget.value);
          }}
          className=" w-1/2"
        />
        <input
          id="toSlider"
          type="range"
          value={toValue}
          min={fromMax}
          max={to}
          onChange={(e) => {
            setToValue(e.currentTarget.value);
            console.log("to value", e.currentTarget.value);
          }}
          className=" w-1/2"
        />
      </div>
    </div>
  );
};

export default RangeInput;
