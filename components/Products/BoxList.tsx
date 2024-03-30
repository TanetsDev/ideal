import { IBox } from "@/types/products.types";
import BoxCard from "./BoxCard";

const BoxList = ({ boxes }: { boxes: IBox[] }) => {
  return (
    <ul className="flex flex-col md:flex-row h-[1340px] md:h-auto md:w-[680px] lg:w-[1296px] overflow-hidden gap-[28px] md:gap-[24px] mt-[28px] lg:mt-[46px] mb-[40px]">
      {boxes.map((box) => (
        <li key={box.id} className="flex justify-center">
          <BoxCard box={box} />
        </li>
      ))}
    </ul>
  );
};

export default BoxList;
