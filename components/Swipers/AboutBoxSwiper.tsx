"use client"; // <===== REQUIRED

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Image from "next/image";
import {
  about1,
  about2,
  about3,
  about4,
} from "@/public/images/slidersImages/aboutBox";

const AboutBoxSwiper = () => {
  const images: any[] = [about1, about2, about3, about4];
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSwiper={(swiper) => swiper}
      effect={"fade"}
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
      className="mt-[28px] md:mt-[46px] md:max-w-[700px]"
    >
      {images.map((img, i) => {
        return (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt="Фото їжі"
              className=" w-ful h-full rounded "
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AboutBoxSwiper;
