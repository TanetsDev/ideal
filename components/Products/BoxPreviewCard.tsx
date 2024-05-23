// import { boxImg } from "@/public/images";
import React, { useEffect, useState } from "react";
import { Swiper as ReactSwiper } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Title from "../Common/Title";
import { uah } from "@/public/icons";
import MainGoldBtn from "../Buttons/MainGoldBtn";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectBoxesState } from "@/redux/boxes/boxesSelector";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { addToCart } from "@/redux/cartSlice/cartSlice";
import useModal from "@/hooks/useModal";
import CartModal from "../Cart/CartList/CartModal";
import GoldLink from "../Buttons/GoldLink";
import { BoxDTO } from "@/types/sanityData.types";

const BoxPreviewCard = () => {
  const params = useParams();
  const router = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState<ReactSwiper | null>(null);

  const { data } = useSelector(selectBoxesState);

  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data || data.length === 0) {
      router.push("/");
    }
  }, [data, router]);

  if (!data || data.length === 0) {
    return null;
  }

  const box = data.filter((e: BoxDTO) => e._id === params.id);

  if (box.length === 0) {
    return (
      <div>
        Щось пішло не так ..
        <GoldLink href="/boxes">До Ідеальних боксів</GoldLink>
      </div>
    );
  }
  const handleAddToCart = () => {
    dispatch(addToCart({ ...box[0], count: 1 }));
    openModal();
  };

  const {
    dishCount,
    imageUrls,
    price,
    // extraType,
    // name,
    personCount,
    weight,
    title,
    dishes,
  } = box[0];
  // console.log(box);
  const titleValue = title
    ? title.find(({ _key }: { _key: string }) => _key === "ukr")?.value || " "
    : " ";
  console.log("Title value:", titleValue);

  return (
    <div className="w-[344px] md:w-[636px] xl:w-full mx-auto xl:flex gap-[31px] xl:mt-[86px]">
      {isModalOpen && <CartModal closeModal={closeModal} />}

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
            imageUrls?.map((e, index) => (
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
            imageUrls?.map((e, index) => (
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
          {titleValue}
        </Title>
        <h3 className="text-left text-base font-semibold font-manrope mt-6 text-basicBlack">
          Наповнення боксу
        </h3>
        <p className="mt-[12px] text-sm md:text-base font-robotoFlex text-basicBlack xl:max-w-[526px] flex flex-col gap-[6px]">
          {dishes &&
            dishes.map((dish: { title: string }, index: number) => (
              <span key={index}>{dish.title}</span>
            ))}
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
            handleClick={handleAddToCart}
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
