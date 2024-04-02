import { boxImg } from "@/public/images";
import React from "react";

import { BoxMarkerType, IBox } from "@/types/products.types";
import Image from "next/image";
import Title from "../Common/Title";
import { uah } from "@/public/icons";
import MainGoldBtn from "../Buttons/MainGoldBtn";

const BoxPreviewCard = ({ box }: { box: IBox }) => {
  return (
    <div className="w-[344px] md:w-[636px] lg:w-full mx-auto lg:flex gap-[31px] lg:mt-[86px]">
      <div className=" relative  mt-[36px] lg:mt-0  pb-[30px] md:p-[22px] rounded bg-cardBacsic  flex flex-col gap-[20px] md:gap-6  w-[344px] md:w-[636px] lg:w-[520px]  mb-5 lg:mb-0">
        {box.type !== "normal" && <Marker type={box.type} />}
        <Image
          src={boxImg}
          alt="Зображення боксу"
          className="h-[330px] md:h-[572px]  lg:h-[455px] w-[340px] md:w-[592px] lg:w-[475px] rounded"
        />
        <div className="flex gap-4">
          <Image
            src={boxImg}
            alt="Зображення боксу"
            className="h-[60px] md:h-[70px] w-[60px]   rounded"
          />
          <Image
            src={boxImg}
            alt="Зображення боксу"
            className="h-[60px] md:h-[70px] w-[60px] md:w-[70px]  rounded"
          />
          <Image
            src={boxImg}
            alt="Зображення боксу"
            className="h-[60px] md:h-[70px]  w-[60px] md:w-[70px]  rounded"
          />
        </div>
      </div>
      <div className="lg:max-w-[636px]">
        <Title className="text-left" isMain={true}>
          {box.title}
        </Title>
        <h3 className="text-left text-base font-semibold font-manrope mt-6 text-basicBlack">
          Наповнення боксу
        </h3>
        <p className="mt-[12px] text-sm md:text-base font-robotoFlex text-basicBlack lg:max-w-[526px] flex flex-col gap-[6px]">
          <span>
            {" "}
            Сендвіч з соковитою качкою, карамелізованою грушею та сиром
            Філадельфія.
          </span>
          <span> З телятиною, соусом венігрет, шпинатом та сиром</span>
          <span>З куркою, соусом айолі, салат ромен і сиром</span>
          <span> З рваною свининою та салатом коул слоу</span>
          <span>Можна обрати ті начинки які подобаються саме вам</span>
        </p>
        <div className="md:flex items-center justify-between md:mt-8 lg:mt-11">
          <div className="flex items-center mt-5 mb-[44px] md:m-0">
            <span className=" text-xs md:text-sm font-manrope text-basicBlack mr-4">
              14 сендвічів
            </span>
            <span className=" text-xs  md:text-sm font-manrope text-basicBlack md:-ml-[12px] mr-[32px]">
              | 4 персони
            </span>
            <span className=" text-base md:text-lg font-manrope text-basicBlack inline-flex items-center mr-[28px]">
              1680 <span className=" text-sm">гр</span>
            </span>
            <span className=" text-xl md:text-3xl font-medium font-manrope inline-flex items-center">
              1600
              <Image src={uah} alt="іконка гривні" className="  size-4" />
            </span>
          </div>
          <MainGoldBtn
            text="До кошика"
            blockName="boxDetails"
            handleClick={() => console.log("click")}
          />
        </div>
      </div>
    </div>
  );
};

export default BoxPreviewCard;

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
      className={`absolute -left-[2px] top-[22px] md:left-4 md:top-7 lg:top-9 w-[107px] lg:w-[107px] h-[27px] lg:h-[27px] rounded-[1px] flex justify-start items-center pl-[12px] text-sm font-manrope text-cardBacsic ${color} `}
    >
      {title}
    </span>
  );
};
