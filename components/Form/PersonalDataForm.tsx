"use client";

import UnderlineGold from "../UnderlineGold/UnderlineGold";

import GoldBtn from "../Buttons/GoldBtn";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { useEffect, useRef, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const PersonalDataFormSchema = yup.object().shape({
  name: yup.string().required("Обов'язкове поле"),
  lastName: yup.string().required("Обов'язкове поле"),
  phone: yup
    .string()
    .required("Обов'язкове поле")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Невірний формат номера"
    ),
  email: yup
    .string()
    .required("Обов'язкове поле")
    .email("Невірний формат email"),
  address: yup.string().required("Обов'язкове поле"),
});

type Inputs = {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
};

const defaultValues = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",

  rememberMe: false,
};

const PersonalDataForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<string | null>(null);

  useState<boolean>(false);

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
  } = useForm<Inputs>({
    defaultValues,
    resolver: yupResolver(PersonalDataFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <h2 className="hidden xl:block text-[24px] leading-[33px] pb-[30px]">
        Особисті данні
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[46px] cartForm text-sm font-robotoFlex max-w-[375px] mx-auto md:w-[350px] xl:mx-0 xl:w-full xl:max-w-[830px]"
      >
        <div className="flex flex-col gap-[46px]  xl:flex-row">
          <div className="flex flex-col gap-[46px] xl:w-full ">
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
                    className="bg-transparent formInput  pl-[10px] pr-[10px]"
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
                    className="bg-transparent formInput  pl-[10px] pr-[10px]"
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
                    className="bg-transparent formInput  pl-[10px] pr-[10px]"
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
          </div>

          <div className="flex flex-col gap-[46px] xl:w-full">
            <div
              className="flex flex-col relative"
              onClick={() => handleInputClick("email")}
              ref={inputRef}
            >
              <label
                htmlFor="email"
                className={`formLabel transition-all ${
                  isActive === "email" || getValues("email") !== ""
                    ? "activeLabel"
                    : ""
                }`}
              >
                Пошта *
              </label>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <input
                    {...field}
                    className="bg-transparent formInput  pl-[10px] pr-[10px]"
                    onBlur={(e) => {
                      setValue("email", e.target.value.trim());
                      trigger("email");
                    }}
                  />
                )}
              />
              {errors.email && (
                <span className="imputEfrror">{errors.email.message}</span>
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
                    className="bg-transparent formInput  pl-[10px] pr-[10px]"
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
          </div>
        </div>

        <GoldBtn
          blockName="EditForm"
          handleClick={() => onSubmit}
          type="submit"
          // className="mx-auto   "
        >
          Зберегти
        </GoldBtn>
      </form>
    </>
  );
};

export default PersonalDataForm;
