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
    shop: "flex flex-col gap-7 md:gap-6 lg:gap-[24px] h-[1790px] md:h-auto overflow-hidden md:flex-row md:flex-wrap md:justify-center",
  };

  return (
    <ul className={`${styles[section]}`}>
      {boxes.map((box) => (
        <BoxCard key={box._id} box={box} />
      ))}
    </ul>
  );
};

export default BoxList;
