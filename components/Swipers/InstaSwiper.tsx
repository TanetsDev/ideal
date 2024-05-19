"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useGetInstaQuery } from "@/redux/insta/instaApi";
import Loader from "../Loaders/Loader";

const InstaSwiper = () => {
  const { data, isLoading, error } = useGetInstaQuery({});

  if (isLoading)
    return (
      <div className=" pt-[200px] pb-[200px] flex items-center justify-center">
        <Loader type="local" size={100} />
      </div>
    );

  if (error) {
    console.error("Error fetching boxes:", error);
    return (
      <div className=" pt-[200px] pb-[200px]">
        Error fetching boxes. Please try again later.
      </div>
    );
  }

  return (
    <Swiper
      spaceBetween={4}
      slidesPerView={4}
      onSwiper={(swiper) => swiper}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 8,
        },
        1280: {
          slidesPerView: 7,
        },
        1600: {
          slidesPerView: 8,
        },
      }}
    >
      {data?.map((img: string, i: number) => {
        return (
          <SwiperSlide key={i}>
            <Image
              src={img}
              height={281}
              width={308}
              alt="Фото з інстаграм"
              className="object-cover rounded h-[184px]  w-[184px] xl:h-[281px] xl:w-[308px]"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default InstaSwiper;
