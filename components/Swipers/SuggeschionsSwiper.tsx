"use client"; // <===== REQUIRED

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IBox } from "@/types/products.types";
import Image from "next/image";
import { arrowLeft, arrowRight } from "@/public/icons";
import SuggestionsBox from "../Products/SuggestionsBoxCard";
import { useSelector } from "react-redux";
import { selectBoxesState } from "@/redux/boxes/boxesSelector";
import { useRouter } from "next/navigation";

const SuggeschionsSwiper = () => {
  const { data: boxes } = useSelector(selectBoxesState);

  const router = useRouter();

  if (!boxes) {
    router.push("/");
    return null;
  }

  return (
    <div className="w-[350px] md:w-[690px] lg:w-full mx-auto">
      <div className="flex gap-6 justify-end px-5 mb-5">
        <Image src={arrowLeft} alt="Стрілка вліво" width={18} height={18} />
        <Image src={arrowRight} alt="Стрілка вправо" width={18} height={18} />
      </div>
      <Swiper
        spaceBetween={4}
        slidesPerView={1}
        onSwiper={(swiper) => swiper}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {boxes.map((box: IBox) => {
          return (
            <SwiperSlide key={box._id}>
              <SuggestionsBox box={box} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SuggeschionsSwiper;
