import { personIcon, uah } from "@/public/icons";
import { boxImg } from "@/public/images";
import Image from "next/image";
import BoxBtn from "../Buttons/BoxBtn";
import { BoxMarkerType, IBox } from "@/types/products.types";
import Link from "next/link";

const SuggestionsBox = ({
  box,
  isSuggestions,
}: {
  box: IBox;
  isSuggestions?: boolean;
}) => {
  return (
    <div
      className={`relative p-[9px]  pb-4 lg:p-2 rounded bg-cardBacsic text-basicBlack flex flex-col items-center w-[340px] md:w-[328px] lg:w-[240px]  `}
    >
      {box.type !== "normal" && <Marker type={box.type} />}
      <Link href={"/boxes/123"}>
        <Image
          src={boxImg}
          alt="Зображення боксу"
          className={`h-[302px] md:h-[290px] lg:h-[208px] w-[325px] md:w-[310px] lg:w-[224px] rounded `}
        />
      </Link>
      <h4 className={`text-center text-xl font-roboto mt-4 lg:mt-2`}>
        {box.title
          ? box.title?.find((title) => title._key === "ukr")?.value || " "
          : " "}
      </h4>
      <div
        className={`flex justify-between mt-5 pr-[21px] pl-1 w-full lg:mt-3 lg:p-0`}
      >
        <span className="flex gap-1 items-center font-roboto text-[22px] lg:text-xl lg:items-baseline font-bold ">
          <Image
            src={personIcon}
            alt="Іконка людини"
            className=" h-[26px] w-[10px]"
          />
          {box.person}
        </span>
        <div className="flex gap-2 items-center lg:ml-auto">
          <span
            className={`font-manrope text-[22px] lg:text-xl font-medium flex items-baseline ${
              isSuggestions ? "lg:text-base" : ""
            }`}
          >
            {box.price}
            <Image src={uah} alt="Знак гривні" className=" size-[14px]" />
          </span>
          <BoxBtn />
        </div>
      </div>
    </div>
  );
};

export default SuggestionsBox;

const Marker = ({
  type,
  isSuggestions,
}: {
  type: BoxMarkerType;
  isSuggestions?: boolean;
}) => {
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
      className={`absolute -left-[3px] top-[22px]  rounded-[1px] flex justify-start items-center px-[6px] py-[2px]  text-[10px] font-manrope text-cardBacsic ${color} ${
        isSuggestions ? "lg:left-[2px]" : ""
      }`}
    >
      {title}
    </span>
  );
};
