"use client";

import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IBox } from "@/types/products.types";
import BoxCard from "../Products/BoxCard";

type Props = {
  boxes: IBox[];
};

const IdealPropositionSwiper: FC<Props> = ({ boxes }) => {
  return (
    <div className="w-[350px] md:w-[690px] lg:w-[1300px] 2xl:w-full mx-auto mt-6">
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
          1100: {
            slidesPerView: 3,
            spaceBetween: 24,
          },

          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
      >
        {boxes.map((box: IBox) => {
          return (
            <SwiperSlide key={box._id}>
              <BoxCard key={box._id} box={box} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default IdealPropositionSwiper;
