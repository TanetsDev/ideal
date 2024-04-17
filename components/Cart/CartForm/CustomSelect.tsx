import { useOutsideClick } from "@/hooks/useOutsideClick";
import React, { Dispatch } from "react";

type Props = {
  options: string[];
  setValue: Dispatch<React.SetStateAction<any>>;
  setIsopen: Dispatch<React.SetStateAction<boolean>>;
  currentValue: string;
};

const CustomSelect = ({
  options,
  setValue,
  setIsopen,
  currentValue,
}: Props) => {
  const handleSelect = (value: string) => {
    setValue(value);
    setIsopen(false);
  };

  const ref = useOutsideClick(() => setIsopen(false));

  return (
    <ul
      className="absolute top-[50px] z-10 text-sm font-robotoFlex text-[#2e2e2e] w-full bg-white"
      ref={ref}
    >
      {options.map((o) => {
        if (o === currentValue) return null;
        return (
          <li key={o} onClick={() => handleSelect(o)} className="py-2">
            {o}
          </li>
        );
      })}
    </ul>
  );
};

export default CustomSelect;
