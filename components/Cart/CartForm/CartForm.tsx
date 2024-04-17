import MainGoldBtn from "@/components/Buttons/MainGoldBtn";
import UnderlineGold from "@/components/UnderlineGold/UnderlineGold";
import { downSelect } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomSelect from "./CustomSelect";
import { DatePicker, MultiSectionDigitalClock } from "@mui/x-date-pickers";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useOutsideClick } from "@/hooks/useOutsideClick";

type Inputs = {
  name: string;
  lastName: string;
  phone: number;
  deliveryMethod: "кур'єром" | "самовивіз";
  city: string;
  address: string;
  date: Date;
  time: string;
  paymentMethod: "кур'єру" | "онлайн";
};

const CartForm = () => {
  const [isNameActive, setIsNameActive] = useState<boolean>(false);
  const [isLastNameActive, setIsLastNameActive] = useState<boolean>(false);
  const [isPhoneActive, setIsPhoneActive] = useState<boolean>(false);
  const [isAddressActive, setIsAddressActive] = useState<boolean>(false);

  const [isDeliverySelectOpen, setIsDeliverySelectOpen] =
    useState<boolean>(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState<boolean>(false);
  const [isPaymentSelectOpen, setIsPaymentSelectOpen] =
    useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [delivery, setDelivery] =
    useState<Inputs["deliveryMethod"]>("кур'єром");
  const [address, setAddress] = useState<string>("");
  const [date, setDate] = useState<Date>(dayjs().toDate());
  const [time, setTime] = useState(
    dayjs("Mon Apr 15 2024 10:00:01 GMT+0300 (Eastern European Summer Time)")
  );
  const [paymentMethod, setPaymentMethod] =
    useState<Inputs["paymentMethod"]>("кур'єру");

  const ref = useOutsideClick(() => setIsTimePickerOpen(false));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[46px] cartForm text-sm font-robotoFlex max-w-[340px] mx-auto lg:w-[340px]"
      >
        <div
          className="flex flex-col relative"
          onFocus={() => setIsNameActive(true)}
          onBlur={() => setIsNameActive(false)}
        >
          <label
            htmlFor="name"
            className={`formLabel transition-all ${
              (isNameActive || name !== "") && "activeLabel"
            }`}
          >
            Ім’я *
          </label>
          <input
            {...register("name", {
              required: true,
              onChange: (e) => setName(e.currentTarget.value),
            })}
            className="bg-transparent formInput"
          />
          {errors.name && (
            <span className="imputEfrror">{errors.name.message}</span>
          )}
          <UnderlineGold />
        </div>

        <div
          className="flex flex-col relative"
          onFocus={() => setIsLastNameActive(true)}
          onBlur={() => setIsLastNameActive(false)}
        >
          <label
            htmlFor="lastName"
            className={`formLabel transition-all ${
              (isLastNameActive || lastName !== "") && "activeLabel"
            }`}
          >
            Приввище *
          </label>
          <input
            {...register("lastName", {
              required: true,
              onChange: (e) => setLastName(e.currentTarget.value),
            })}
            className="bg-transparent formInput"
          />
          {errors.lastName && (
            <span className="imputEfrror">{errors.lastName.message}</span>
          )}
          <UnderlineGold />
        </div>

        <div
          className="flex flex-col relative"
          onFocus={() => setIsPhoneActive(true)}
          onBlur={() => setIsPhoneActive(false)}
        >
          <label
            htmlFor="phone"
            className={`formLabel transition-all ${
              (isPhoneActive || phone !== "") && "activeLabel"
            }`}
          >
            Телефон *
          </label>
          <input
            {...register("phone", {
              required: "Обов'язкове поле",
              onChange: (e) => setPhone(e.currentTarget.value),
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                message: "Невірний формат номера",
              },
            })}
            className="bg-transparent formInput"
          />
          {errors.phone && (
            <span className="imputEfrror">{errors.phone.message}</span>
          )}
          <UnderlineGold />
        </div>

        <div
          className="flex flex-col relative"
          onClick={(e: any) => {
            if (e.target.localName !== "li") setIsDeliverySelectOpen((p) => !p);
          }}
        >
          <label htmlFor="deliveryMethod" className="activeLabel">
            Доставка *
          </label>
          <input
            {...register("deliveryMethod", {
              required: true,
            })}
            className="bg-transparent formInput "
            value={delivery}
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
              setValue={setDelivery}
              currentValue={delivery}
            />
          )}
        </div>

        <div className="flex flex-col relative">
          <label htmlFor="city" className={`activeLabel`}>
            Місто *
          </label>
          <input
            {...register("city", {
              required: true,
              onChange: (e) => setCity(e.currentTarget.value),
              onBlur: (e) => {
                if (city.trim() === "") {
                  setCity("Київ");
                  e.currentTarget.value = "Київ";
                }
              },
            })}
            className="bg-transparent formInput "
            defaultValue={"Київ"}
          />
          {errors.city && (
            <span className="imputEfrror">{errors.city.message}</span>
          )}
          <UnderlineGold />
        </div>

        <div
          className="flex flex-col relative"
          onFocus={() => setIsAddressActive(true)}
          onBlur={() => setIsAddressActive(false)}
        >
          <label
            htmlFor="address"
            className={`formLabel transition-all ${
              (isAddressActive || address !== "") && "activeLabel"
            }`}
          >
            Адреса *
          </label>
          <input
            id="address"
            {...register("address", {
              required: "Обов'язкове поле",
              onChange: (e) => setAddress(e.currentTarget.value),
            })}
            className="bg-transparent formInput "
          />
          {errors.address && (
            <span className="imputEfrror">{errors.address.message}</span>
          )}
          <UnderlineGold />
        </div>

        <div className="relative">
          <label className="activeLabel">Дата *</label>
          <input
            {...register("date", {})}
            className="formInput bg-inherit w-full"
            value={dayjs(date).format("DD.MM.YYYY")}
          />
          <DatePicker
            sx={{
              opacity: 0,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
            }}
            onChange={(v) => setDate(dayjs(v).toDate())}
          />
          <CiCalendarDate className="absolute right-0 bottom-[5px]" size={25} />

          <UnderlineGold />
        </div>

        <div className=" bg-cardGrey px-[10px] py-2">
          <p>
            Мінімальний час замовлення за 2 години. Видача замовлень на ранок
            оформлюються з вечора.{" "}
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
            value={time.format("HH.mm")}
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
          onClick={(e: any) => {
            if (e.target.localName !== "li") setIsPaymentSelectOpen((p) => !p);
          }}
        >
          <label className="activeLabel">Оплата *</label>
          <input
            {...register("paymentMethod", {
              required: true,
            })}
            className="bg-transparent formInput "
            value={paymentMethod}
          />
          <Image
            src={downSelect}
            alt=""
            className="absolute right-0 bottom-[5px] size-[18px] "
          />
          <UnderlineGold />
          {isPaymentSelectOpen && (
            <CustomSelect
              options={["кур'єру", "онлайн"]}
              setIsopen={setIsPaymentSelectOpen}
              setValue={setPaymentMethod}
              currentValue={paymentMethod}
            />
          )}
        </div>
        <MainGoldBtn blockName="CartModal" handleClick={() => null}>
          <input type="submit" value="Оформити замовлення" />
        </MainGoldBtn>
      </form>
    </LocalizationProvider>
  );
};

export default CartForm;
