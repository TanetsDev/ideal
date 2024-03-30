import { personIcon, uah } from "@/public/icons";
import { boxImg } from "@/public/images";
import Image from "next/image";
import BoxBtn from "../Buttons/BoxBtn";
import { BoxMarkerType, IBox } from "@/types/products.types";

const BoxCard = ({ box }: { box: IBox }) => {
  return (
    <div className=" relative p-[9px] lg:p-2 pb-4 lg:pb-[14px] rounded bg-cardBacsic text-basicBlack flex flex-col items-center w-[340px] md:w-[328px] lg:w-[306px]">
      {box.type !== "normal" && <Marker type={box.type} />}
      <Image
        src={boxImg}
        alt="Зображення боксу"
        className="h-[302px] md:h-[290px] lg:h-[270px] w-[325px] md:w-[310px] lg:w-[290px] rounded"
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

const Marker = ({ type }: { type: BoxMarkerType }) => {
  let color: string;
  let title: string;
  switch (type) {
    case "hit":
      color = "bg-basicGreen";
      title = "Хіт сезону";
      break;
    case "new":
      color = "bg-darkBlue";
      title = "Новинка";
      break;

    default:
      color = "bg-basicViolet";
      title = "Бестселлер";
      break;
  }

  return (
    <span
      className={`absolute -left-[3px] top-[22px] w-[70px] lg:w-[64px] h-[20px] lg:h-[18px] rounded-[1px] flex justify-start items-center pl-[6px] text-[10px] font-manrope text-cardBacsic ${color} `}
    >
      {title}
    </span>
  );
};
