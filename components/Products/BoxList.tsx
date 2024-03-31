import { IBox } from "@/types/products.types";
import BoxCard from "./BoxCard";

const BoxList = ({
  boxes,
  section,
}: {
  boxes: IBox[];
  section: "idealProposition" | "shop";
}) => {
  const styles = {
    idealProposition:
      "flex flex-col md:flex-row h-[1340px] md:h-auto md:w-[680px] lg:w-[1296px] overflow-hidden gap-[28px] md:gap-[24px] mt-[28px] lg:mt-[46px] mb-[40px]",
    shop: "flex flex-col gap-7 h-[1790px] overflow-hidden",
  };

  return (
    <ul className={`${styles[section]}`}>
      {boxes.map((box) => (
        <li key={box.id} className="flex justify-center">
          <BoxCard box={box} />
        </li>
      ))}
    </ul>
  );
};

export default BoxList;
