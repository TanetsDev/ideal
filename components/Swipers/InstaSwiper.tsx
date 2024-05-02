"use client"; // <===== REQUIRED

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import {
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
} from "@/public/images/slidersImages/insta";
import { useGetInstaQuery } from "@/redux/insta/instaApi";

const InstaSwiper = () => {
  const images = [i1, i2, i3, i4, i5, i6, i7, i8];
  const { data } = useGetInstaQuery({});

  console.log("Insta", data);

  return (
    <Swiper
      spaceBetween={4}
      slidesPerView={2}
      onSwiper={(swiper) => swiper}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 5,
        },
      }}
    >
      {images.map((img, i) => {
        return (
          <SwiperSlide key={i}>
            <Image
              src={img}
              // height="200"
              // width="200"
              alt="Фото з інстаграм"
              className=" rounded size-[184] lg:h-[280px] lg:w-[306px]"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default InstaSwiper;
