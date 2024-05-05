"use client"; // <===== REQUIRED

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
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
