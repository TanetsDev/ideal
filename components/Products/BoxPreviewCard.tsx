// import { boxImg } from "@/public/images";
import React, { useState } from "react";
import { Swiper as ReactSwiper } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BoxMarkerType, IBoxCard } from "@/types/products.types";
import Image from "next/image";
import Title from "../Common/Title";
import { uah } from "@/public/icons";
import MainGoldBtn from "../Buttons/MainGoldBtn";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectBoxesState } from "@/redux/boxes/boxesSelector";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const BoxPreviewCard = () => {
  const params = useParams();
  const router = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState<ReactSwiper | null>(null);

  const { data } = useSelector(selectBoxesState);

  if (!data) {
    router.push("/");
    return null;
  }

  const box = data.filter((e: IBoxCard) => e._id === params.id);

  if (!box) {
    return <div>Box not found</div>;
  }
  const {
    dishCount,
    imageUrls,
    price,
    // extraType,
    // name,
    personCount,
    weight,
    // title,
  } = box[0];
  console.log(box);

  return (
    <div className="w-[344px] md:w-[636px] xl:w-full mx-auto xl:flex gap-[31px] xl:mt-[86px]">
      <div className=" relative  mt-[36px] xl:mt-0  pb-[30px] md:p-[22px] rounded bg-cardBacsic  flex flex-col gap-[20px] md:gap-6  w-[344px] md:w-[636px] xl:w-[520px]  mb-5 xl:mb-0">
        {/* {box.type !== "normal" && <Marker type={box.type} />} */}
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          style={{ width: "100%" }}
        >
          {imageUrls &&
            imageUrls?.map((e: string, index: number) => (
              <SwiperSlide key={index}>
                <Image
                  src={e}
                  width={800}
                  height={800}
                  alt="Зображення боксу"
                  className=" object-cover h-[330px] md:h-[572px]  xl:h-[455px] w-[340px] md:w-[592px] xl:w-[475px] rounded"
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          style={{ width: "100%" }}
        >
          {imageUrls &&
            imageUrls?.map((e: string, index: number) => (
              <SwiperSlide key={index}>
                <Image
                  src={e}
                  width={800}
                  height={800}
                  alt="Зображення боксу"
                  className="object-cover h-[60px] md:h-[70px] w-full   rounded"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="xl:max-w-[636px]">
        <Title className="text-left" isMain={true}>
          {box.title}
        </Title>
        <h3 className="text-left text-base font-semibold font-manrope mt-6 text-basicBlack">
          Наповнення боксу
        </h3>
        <p className="mt-[12px] text-sm md:text-base font-robotoFlex text-basicBlack xl:max-w-[526px] flex flex-col gap-[6px]">
          <span>
            Сендвіч з соковитою качкою, карамелізованою грушею та сиром
            Філадельфія.
          </span>
          <span> З телятиною, соусом венігрет, шпинатом та сиром</span>
          <span>З куркою, соусом айолі, салат ромен і сиром</span>
          <span> З рваною свининою та салатом коул слоу</span>
          <span>Можна обрати ті начинки які подобаються саме вам</span>
        </p>

        <div className="md:flex items-center justify-between md:mt-8 xl:mt-11">
          <div className="flex items-center mt-5 mb-[44px] md:m-0">
            <span className=" text-xs md:text-sm font-manrope text-basicBlack mr-4">
              {dishCount} сендвічів
            </span>
            <span className=" text-xs  md:text-sm font-manrope text-basicBlack md:-ml-[12px] mr-[32px]">
              | {personCount} персони
            </span>
            <span className=" text-base md:text-lg font-manrope text-basicBlack inline-flex items-center mr-[28px]">
              {weight} <span className=" text-sm">гр</span>
            </span>
            <span className=" text-2xl md:text-3xl font-medium font-manrope inline-flex items-center">
              {price}
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

// const Marker = ({ type }: { type: BoxMarkerType }) => {
//   let color: string;
//   let title: string;
//   switch (type) {
//     case "hit":
//       color = "bg-basicGreen";
//       title = "Хіт сезону";
//       break;
//     case "new":
//       color = "bg-darkBlue";
//       title = "Новинка";
//       break;

//     default:
//       color = "bg-basicViolet";
//       title = "Бестселлер";
//       break;
//   }

//   return (
//     <span
//       className={` absolute z-[10] -left-[2px] top-[22px] md:left-4 md:top-7 xl:top-9 w-[107px] xl:w-[107px] h-[27px] xl:h-[27px] rounded-[1px] flex justify-start items-center pl-[12px] text-sm font-manrope text-cardBacsic ${color} `}
//     >
//       {title}
//     </span>
//   );
// };
