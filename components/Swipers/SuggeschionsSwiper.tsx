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

const boxes: IBox[] = [
  {
    id: 1,
    title: "Супер бокс",
    price: 1600,
    person: 4,
    imageUrl: "",
    type: "normal",
  },
  {
    id: 2,
    title: "Супер бокс",
    price: 1600,
    person: 4,
    imageUrl: "",
    type: "hit",
  },
  {
    id: 4,
    title: "Супер бокс",
    price: 1600,
    person: 4,
    imageUrl: "",
    type: "top",
  },
  {
    id: 6,
    title: "Супер бокс",
    price: 1600,
    person: 4,
    imageUrl: "",
    type: "new",
  },
  {
    id: 7,
    title: "Супер бокс",
    price: 1600,
    person: 4,
    imageUrl: "",
    type: "normal",
  },
  {
    id: 8,
    title: "Супер бокс",
    price: 1600,
    person: 4,
    imageUrl: "",
    type: "normal",
  },
];

const SuggeschionsSwiper = () => {
  return (
    <div className="w-[350px] md:w-[690px] lg:w-full mx-auto">
      <div className="flex gap-6 justify-end px-5 mb-5">
        <Image src={arrowLeft} alt="Стрілка вліво" width={18} />
        <Image src={arrowRight} alt="Стрілка вправо" width={18} />
      </div>
      <Swiper
        spaceBetween={4}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1000: {
            slidesPerView: 5,
          },
        }}
      >
        {boxes.map((box, i) => {
          return (
            <SwiperSlide key={i}>
              <SuggestionsBox box={box} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SuggeschionsSwiper;
