import { closeIcon, minusIcon, plusIcon, uah } from "@/public/icons";
import { ICartBox } from "@/types/products.types";
import Image from "next/image";
import React from "react";
type Props = {
  item: ICartBox;
  isPreview?: boolean;
  amount: number;
};

const CartListItem = ({ item, isPreview, amount }: Props) => {
  return (
    <li
      className={`relative py-4 pl-3 pr-4 border-y border-lightGrey ${
        !isPreview && "border-t-0 pt-0 lg:pl-0"
      } `}
    >
      <Image
        src={closeIcon}
        alt="Іконка закриття"
        className="absolute size-[22px] top-4 right-3 "
      />
      <div className="flex gap-4">
        <Image
          src={item.imageUrls[0]}
          alt="Фото бокса"
          className=" size-[120px] rounded"
        />
        <div className="flex flex-col gap-4 flex-grow">
          <h3 className=" text-lg font-manrope font-semibold">
            {item.title[0].value}
          </h3>
          <div className="flex gap-[10px]">
            <Image src={minusIcon} alt="мінус" className=" size-4" />
            <span className="w-[40px] h-5 flex items-center justify-center border border-basicGrey rounded-[2px] font-manrope text-xl font-medium text-basicBlack">
              {amount}
            </span>
            <Image src={plusIcon} alt="плюс" className=" size-4" />
          </div>
          <div className="flex gap-4 items-center">
            <span
              className={`text-xs font-manrope text-basicBlack ${
                isPreview && "hidden"
              }`}
            >
              Вага {item.weight} гр
            </span>
            <p className="flex items-center justify-center text-basicBlack text-lg font-manrope font-medium self-end">
              {item.price * amount}
              <Image src={uah} alt="ікона валюти" className="size-[15px]" />
            </p>
          </div>
        </div>
      </div>
      <div
        className={`flex gap-3 mt-[14px] text-xs font-manrope text-basicBlack ${
          !isPreview && "hidden"
        }`}
      >
        <span>Вага {item.weight} гр</span>
        <span className="flex items-center">
          Ціна {item.price}{" "}
          <Image src={uah} alt="ікона валюти" className=" size-3 " />
        </span>
      </div>
    </li>
  );
};

export default CartListItem;
