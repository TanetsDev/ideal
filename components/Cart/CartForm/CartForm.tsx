"use client";

import UnderlineGold from "@/components/UnderlineGold/UnderlineGold";
import { downSelect } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

import CustomSelect from "./CustomSelect";
import { DatePicker, MultiSectionDigitalClock } from "@mui/x-date-pickers";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { IOrder } from "@/types/order.types";

import { useCreateMutation } from "@/redux/orders/ordersApi";
import { useSelector } from "react-redux";
import {
  selectCart,
  selectTotalPrice,
  selectTotalWeight,
} from "@/redux/cartSlice/selectCart";
import { ICartBox } from "@/types/products.types";
import GoldBtn from "@/components/Buttons/GoldBtn";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CartFormSchema = yup.object<IDeliveryInfo>().shape({
  name: yup.string().required("Обов'язкове поле"),
  lastName: yup.string().required("Обов'язкове поле"),
  phone: yup
    .string()
    .required("Обов'язкове поле")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Невірний формат номера"
    ),
  address: yup.string().required("Обов'язкове поле"),
  city: yup.string().required("Обов'язкове поле"),
  date: yup
    .date()
    // .min("Дата та час не можуть бути раніше поточного часу")
    .required("Обов'язкове поле"),
  time: yup.string().required("Обов'язкове поле"),
  paymentMethod: yup
    .string()
    .oneOf(["Кур'єру", "Онлайн"])
    .required("Обов'язкове поле"),
  deliveryMethod: yup
    .string()
    .oneOf(["Кур'єром", "Самовивіз"])
    .required("Обов'язкове поле"),
});

export interface IDeliveryInfo {
  name: string;
  lastName: string;
  phone: string;
  city: string;
  address: string;
  date: Date;
  time: string;
  deliveryMethod: "Кур'єром" | "Самовивіз";
  paymentMethod: "Кур'єру" | "Онлайн";
}

const defaultCartForm: IDeliveryInfo = {
  name: "",
  lastName: "",
  phone: "",
  city: "Київ",
  address: "",
  date: new Date(),
  time: "",
  deliveryMethod: "Кур'єром" || "Самовивіз",
  paymentMethod: "Кур'єру" || "Онлайн",
};

const CartForm = () => {
  const totalPrice = useSelector(selectTotalPrice);
  const totalWeight = useSelector(selectTotalWeight);
  const cart = useSelector(selectCart);
  const [registerOrder] = useCreateMutation();

  const inputRef = useRef<HTMLInputElement>(null);

  const [isActive, setIsActive] = useState<string | null>(null);
  const [isDeliverySelectOpen, setIsDeliverySelectOpen] =
    useState<boolean>(false);

  const [isTimePickerOpen, setIsTimePickerOpen] = useState<boolean>(false);
  const [isPaymentSelectOpen, setIsPaymentSelectOpen] =
    useState<boolean>(false);

  const [time, setTime] = useState(dayjs().add(2, "hour"));

  const ref = useOutsideClick(() => setIsTimePickerOpen(false));

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputClick = (value: string) => {
    setIsActive(value);
  };

  const {
    trigger,
    formState: { errors },
    control,
    handleSubmit,
    reset,
    setValue,
    getValues,
    register,
  } = useForm<IDeliveryInfo>({
    defaultValues: defaultCartForm,

    resolver: yupResolver(CartFormSchema),
  });

  const orderItems = cart.map((item: ICartBox) => ({
    boxName: ` ${
      item.title
        ? item.title?.find((title) => title._key === "ukr")?.value || " "
        : " "
    }`,

    count: item.count,
  }));

  const handleOrder: SubmitHandler<IDeliveryInfo> = async (data) => {
    // console.log("YYYY-MM-DD", data.date);

    const order: IOrder = {
      ...data,
      order: orderItems,
      deliveryPrice: 150,
      discount: 0,
      totalPrice: totalPrice,
      totalWeight: totalWeight,
      paymentrStatus: "fullfield",
      userId: 42,
    };

    if (order) {
      const orderHistory = await registerOrder(order);
      console.log("ORDER HISTORY", orderHistory);
    }

    reset();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form
        onSubmit={handleSubmit(handleOrder)}
        className="flex flex-col gap-[46px] cartForm text-sm font-robotoFlex max-w-[340px] mx-auto lg:w-[340px]"
      >
        <div
          className="flex flex-col relative "
          onClick={() => handleInputClick("name")}
          ref={inputRef}
        >
          <label
            htmlFor="name"
            className={`formLabel transition-all ${
              isActive === "name" || getValues("name") !== ""
                ? "activeLabel"
                : ""
            }`}
          >
            Ім’я *
          </label>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <input
                {...field}
                className="bg-transparent formInput  "
                onBlur={(e) => {
                  setValue("name", e.target.value.trim());
                  trigger("name");
                }}
              />
            )}
          />
          {errors.name && (
            <span className="imputEfrror">{errors.name.message}</span>
          )}
          <UnderlineGold />
        </div>

        <div
          className="flex flex-col relative"
          ref={inputRef}
          onClick={() => handleInputClick("lastName")}
        >
          <label
            htmlFor="lastName"
            className={`formLabel transition-all ${
              isActive === "lastName" || getValues("lastName") !== ""
                ? "activeLabel"
                : ""
            }`}
          >
            Прізвище *
          </label>
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <input
                {...field}
                className="bg-transparent formInput  "
                onBlur={(e) => {
                  setValue("lastName", e.target.value.trim());
                  trigger("lastName");
                }}
              />
            )}
          />
          {errors.lastName && (
            <span className="imputEfrror">{errors.lastName.message}</span>
          )}
          <UnderlineGold />
        </div>

        <div
          className="flex flex-col relative"
          onClick={() => handleInputClick("phone")}
          ref={inputRef}
        >
          <label
            htmlFor="phone"
            className={`formLabel transition-all ${
              isActive === "phone" || getValues("phone") !== ""
                ? "activeLabel"
                : ""
            }`}
          >
            Телефон *
          </label>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <input
                {...field}
                className="bg-transparent formInput  "
                onBlur={(e) => {
                  setValue("phone", e.target.value.trim());
                  trigger("phone");
                }}
              />
            )}
          />
          {errors.phone && (
            <span className="imputEfrror">{errors.phone.message}</span>
          )}
          <UnderlineGold />
        </div>

        <div
          className="flex flex-col relative"
          onClick={() => {
            handleInputClick("delivery");
            setIsDeliverySelectOpen(!isDeliverySelectOpen);
          }}
        >
          <label htmlFor="deliveryMethod" className="activeLabel">
            Доставка *
          </label>
          <Controller
            control={control}
            name="deliveryMethod"
            render={({ field }) => (
              <div
                className="flex flex-col relative"
                onClick={() => handleInputClick("delivery")}
              >
                <input
                  {...field}
                  className="bg-transparent formInput "
                  value={getValues("deliveryMethod")}
                  readOnly
                />
                <Image
                  src={downSelect}
                  alt=""
                  className="absolute right-0 bottom-[5px] size-[18px] "
                />
                <UnderlineGold />
                {isDeliverySelectOpen && (
                  <CustomSelect
                    options={["Кур'єром", "Самовивіз"]}
                    setIsopen={setIsDeliverySelectOpen}
                    setValue={(value) => {
                      setValue("deliveryMethod", value);
                    }}
                    currentValue={getValues("deliveryMethod")}
                  />
                )}
              </div>
            )}
          />
          {errors.deliveryMethod && (
            <span className="imputEfrror">{errors.deliveryMethod.message}</span>
          )}
        </div>

        <div
          className="flex flex-col relative"
          onClick={() => handleInputClick("city")}
          ref={inputRef}
        >
          <label
            htmlFor="city"
            className={`formLabel transition-all ${
              isActive === "city" || getValues("city") !== ""
                ? "activeLabel"
                : ""
            }`}
          >
            Місто *
          </label>
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <input
                {...field}
                className="bg-transparent formInput"
                onBlur={(e) => {
                  field.onChange(e.target.value.trim());
                  trigger("city");
                }}
              />
            )}
          />
          {errors.city && (
            <span className="imputEfrror">{errors.city.message}</span>
          )}
          <UnderlineGold />
        </div>

        <div
          className="flex flex-col relative"
          onClick={() => handleInputClick("address")}
          ref={inputRef}
        >
          <label
            htmlFor="address"
            className={`formLabel transition-all ${
              isActive === "address" || getValues("address") !== ""
                ? "activeLabel"
                : ""
            }`}
          >
            Адреса *
          </label>
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <input
                {...field}
                className="bg-transparent formInput  "
                onBlur={(e) => {
                  setValue("address", e.target.value.trim());
                  trigger("address");
                }}
              />
            )}
          />
          {errors.address && (
            <span className="imputEfrror">{errors.address.message}</span>
          )}
          <UnderlineGold />
        </div>

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <div className="relative">
              <label className="activeLabel">Дата *</label>
              <input
                {...field}
                className="formInput bg-inherit w-full"
                value={dayjs(field.value).format("YYYY-MM-DD")}
                // onChange={(e) => {

                //   const selectedDate = dayjs(e.target.value, "YYYY-MM-DD");
                //   console.log("toDate", selectedDate.toDate());
                //   field.onChange(selectedDate.toDate());

                //   trigger("date");
                // }}
              />
              <DatePicker
                sx={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 10,
                }}
                // тут потрібно прописати часовий пояс
                onChange={(v) => field.onChange(dayjs(v).toDate())}
                minDate={dayjs(new Date())}
              />
              <CiCalendarDate
                className="absolute cursor-pointer right-2 bottom-[5px]"
                size={25}
              />
              {errors.date && (
                <span className="imputEfrror">{errors.date.message}</span>
              )}
              <UnderlineGold />
            </div>
          )}
        />

        <div className=" bg-cardGrey px-[10px] py-2">
          <p>
            Мінімальний час замовлення за 2 години. Видача замовлень на ранок
            оформлюються з вечора.
            <Link href={"/shipment-payment"} className=" text-darkBlue">
              Детальніше
            </Link>
          </p>
        </div>

        <div
          className="relative"
          onClick={(e: any) => {
            if (e.target.localName !== "li") setIsTimePickerOpen((p) => !p);
          }}
        >
          <label className="activeLabel">Година *</label>
          <input
            {...register("time", {
              required: true,
            })}
            className="formInput bg-inherit"
            value={time.format("HH:mm")}
          />
          {isTimePickerOpen && (
            <MultiSectionDigitalClock
              sx={{
                position: "absolute",
                top: "50px",
                right: "20px",
                backgroundColor: "white",
                width: "120px",
                borderRadius: "4px",
                padding: "4px",
                zIndex: 10,
              }}
              onChange={(v, ss) => {
                if (ss === "finish") setIsTimePickerOpen(false);
                setTime(v);
              }}
              ampm={false}
              views={["hours", "minutes"]}
              value={time}
              ref={ref}
            />
          )}

          <MdOutlineAccessTime
            size={20}
            className="absolute right-0 bottom-[5px]"
          />
          <UnderlineGold />
        </div>

        <div
          className="flex flex-col relative"
          onClick={() => {
            handleInputClick("paymentMethod");
            setIsPaymentSelectOpen(!isPaymentSelectOpen);
          }}
        >
          <label className="activeLabel">Оплата *</label>
          <Controller
            control={control}
            name="paymentMethod"
            render={({ field }) => (
              <div className="flex flex-col relative">
                <input
                  {...field}
                  className="bg-transparent formInput "
                  value={getValues("paymentMethod")}
                  readOnly
                />
                <Image
                  src={downSelect}
                  alt=""
                  className="absolute right-0 bottom-[5px] size-[18px] "
                />
                <UnderlineGold />
                {isPaymentSelectOpen && (
                  <CustomSelect
                    options={["Кур'єру", "Онлайн"]}
                    setIsopen={setIsPaymentSelectOpen}
                    setValue={(value) => {
                      setValue("paymentMethod", value);
                    }}
                    currentValue={getValues("paymentMethod")}
                  />
                )}
              </div>
            )}
          />
          {errors.paymentMethod && (
            <span className="imputEfrror">{errors.paymentMethod.message}</span>
          )}
        </div>
        <GoldBtn blockName="CartModal" handleClick={() => null} type="submit">
          Оформити замовлення
        </GoldBtn>
      </form>
    </LocalizationProvider>
  );
};

export default CartForm;
