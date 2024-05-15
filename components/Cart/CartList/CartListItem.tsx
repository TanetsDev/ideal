import { closeIcon, uah } from "@/public/icons";
import { changeItemCount, removeCart } from "@/redux/cartSlice/cartSlice";
import { ICartBox } from "@/types/products.types";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
type Props = {
  item: ICartBox;
  isPreview?: boolean;
  amount: number;
};
const CartListItem = ({ item, isPreview, amount }: Props) => {
  const dispatch = useDispatch();

  const handleRemoveToCart = () => {
    dispatch(removeCart(item._id));
  };

  const increaseCount = () => {
    dispatch(changeItemCount({ _id: item._id, delta: 1 }));
  };

  const decreaseCount = () => {
    dispatch(changeItemCount({ _id: item._id, delta: -1 }));
  };
  return (
    <li
      className={` xl:px-[40px] relative py-4 pl-3 pr-4 border-y border-lightGrey ${
        !isPreview && "border-t-0 pt-0 lg:pl-0"
      } `}
    >
      <div onClick={handleRemoveToCart}>
        <Image
          width={20}
          height={20}
          src={closeIcon}
          alt="Іконка закриття"
          className="absolute size-[22px] top-4 right-3 xl:right-[44px] "
        />
      </div>

      <div className="flex gap-4">
        {Array.isArray(item.imageUrls) && (
          <Image
            src={item.imageUrls[0]}
            alt={`Зображення боксу `}
            className=" size-[120px] md:size-[200px] rounded"
            width={500}
            height={500}
          />
        )}

        <div
          className={` flex flex-col  justify-center  gap-[20px] flex-grow `}
        >
          <h3 className=" text-[18px] md:text-[24px] pr-[25px]  font-manrope font-semibold">
            {item.title
              ? item.title?.find((title) => title._key === "ukr")?.value || " "
              : " "}
          </h3>
          <div
            className={`md:flex   ${
              !isPreview ? "flex-col   gap-[20px]" : "gap-[46px] xl:gap-[70px]"
            } `}
          >
            <div className="flex gap-[10px] items-center">
              <button
                className={`hover:text-[#733774] ${
                  item.count === 1 ? "text-[#ECE7E7]" : ""
                }`}
                type="button"
                onClick={decreaseCount}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <span className="w-[40px] h-5 flex items-center justify-center border border-basicGrey rounded-[2px] font-manrope text-xl font-medium text-basicBlack">
                {item.count}
              </span>
              <button
                className="hover:text-[#733774] "
                type="button"
                onClick={increaseCount}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`flex gap-4 items-center  ${
                isPreview && "justify-end  "
              }`}
            >
              <span
                className={` pt-[16px] md:pt-0  text-xs font-manrope text-basicBlack ${
                  isPreview && "hidden"
                }`}
              >
                Вага {item.weight} гр
              </span>
              <p className="pt-[16px] md:pt-0 flex items-center justify-end text-basicBlack text-lg font-manrope font-medium self-end ">
                {item.price * amount}
                <Image
                  width={20}
                  height={20}
                  src={uah}
                  alt="ікона валюти"
                  className="size-[15px]"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` md:text-[14px] flex gap-3 md:w-[200px] md:justify-between mt-[14px] text-xs font-manrope text-basicBlack ${
          !isPreview && "hidden"
        }`}
      >
        <span>Вага {item.weight} гр</span>
        <span className="flex items-end ">
          Ціна {item.price}{" "}
          <Image
            width={20}
            height={20}
            src={uah}
            alt="ікона валюти"
            className=" size-[14px] "
          />
        </span>
      </div>
    </li>
  );
};

export default CartListItem;
