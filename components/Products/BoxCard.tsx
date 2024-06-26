import { personIcon, uah } from "@/public/icons";
import Image from "next/image";
import BoxBtn from "../Buttons/BoxBtn";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice/cartSlice";

import useModal from "@/hooks/useModal";
import CartModal from "../Cart/CartList/CartModal";
import { BoxDTO } from "@/types/sanityData.types";

const BoxCard = ({ box }: { box: BoxDTO }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...box, count: 1 }));
    openModal();
  };

  return (
    <li key={box._id} className="flex justify-center xl:h-[385px]">
      {isModalOpen && <CartModal closeModal={closeModal} />}
      <div
        className={`relative p-[9px] xl:p-2 pb-4 xl:pb-[14px] rounded bg-cardBacsic text-basicBlack flex flex-col items-center w-[340px] md:w-[328px] xl:w-[306px] `}
      >
        {/* {box.type !== "normal" && <Marker type={box.type} />} */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          style={{ width: "300px" }}
        >
          {Array.isArray(box.imageUrls) ? (
            box.imageUrls.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <Link key={index} href={`/boxes/${box._id}`} passHref>
                  <Image
                    src={imageUrl}
                    alt={`Зображення боксу ${index + 1}`}
                    className={`h-[302px] md:h-[290px] xl:h-[270px] w-[325px] md:w-[310px] xl:w-[290px] rounded `}
                    width={500}
                    height={500}
                  />
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <Link href={`/boxes/${box._id}`} passHref>
                <Image
                  src={box.imageUrls}
                  alt="Зображення боксу"
                  className={`h-[302px] md:h-[290px] xl:h-[270px] w-[325px] md:w-[310px] xl:w-[290px] rounded `}
                  width={500}
                  height={500}
                />
              </Link>
            </SwiperSlide>
          )}
        </Swiper>
        <h4 className={`text-center text-xl font-roboto mt-4 `}>
          {box.title
            ? box.title?.find((title) => title._key === "ukr")?.value || " "
            : " "}
        </h4>
        <div className={`flex justify-between mt-5 pr-[21px] pl-1 w-full `}>
          <span className="flex gap-1 items-center font-roboto text-[22px] font-bold ">
            <Image
              src={personIcon}
              alt="Іконка людини"
              className=" h-[26px] w-[10px]"
              width={200}
              height={200}
            />
            {box.personCount}
          </span>
          <div className="flex gap-2 items-center">
            <span
              className={`font-manrope text-[22px] font-medium flex items-baseline `}
            >
              {box.price}
              <Image src={uah} alt="Знак гривні" className=" size-[14px]" />
            </span>
            <BoxBtn handleAdd={handleAddToCart} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default BoxCard;

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
//       className={`absolute left-[3px] z-[2] top-[22px]  rounded-[1px] flex justify-start items-center px-[6px] py-[2px]  text-[10px] font-manrope text-cardBacsic ${color} `}
//     >
//       {title}
//     </span>
//   );
// };
