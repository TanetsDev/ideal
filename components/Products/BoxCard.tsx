import { personIcon, uah } from "@/public/icons";
import { boxImg } from "@/public/images";
import Image from "next/image";
import BoxBtn from "../Buttons/BoxBtn";
import { IBox } from "@/types/products.types";

const BoxCard = ({ box }: { box: IBox }) => {
  return (
    <div className=" p-[9px] pb-4 rounded bg-cardBacsic text-basicBlack flex flex-col items-center w-[340px]">
      <Image
        src={boxImg}
        alt="Зображення боксу"
        className="h-[302px] w-[325px] rounded"
      />
      <h4 className=" text-center text-xl font-roboto mt-4 ">{box.title}</h4>
      <div className=" flex justify-between mt-5 pr-[21px] pl-1 w-full ">
        <span className="flex gap-1 items-center font-roboto text-[22px] font-bold ">
          <Image
            src={personIcon}
            alt="Іконка людини"
            className=" h-[26px] w-[10px]"
          />
          {box.person}
        </span>
        <div className="flex gap-2 items-center">
          <span className=" font-manrope text-[22px] font-medium flex items-baseline">
            {box.price}
            <Image src={uah} alt="Знак гривні" className=" size-[14px]" />
          </span>
          <BoxBtn />
        </div>
      </div>
    </div>
  );
};

export default BoxCard;
