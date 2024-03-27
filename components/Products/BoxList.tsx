import { IBox } from "@/types/products.types";
import BoxCard from "./BoxCard";

const BoxList = ({ boxes }: { boxes: IBox[] }) => {
  return (
    <ul className="grid grid-cols-1 grid-rows-3 gap-[28px] mt-7">
      {boxes.map((box) => (
        <li key={box.id} className="flex justify-center">
          <BoxCard box={box} />
        </li>
      ))}
    </ul>
  );
};

export default BoxList;
