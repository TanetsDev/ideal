"use client";

import UnderlineGold from "../UnderlineGold/UnderlineGold";

import GoldBtn from "../Buttons/GoldBtn";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { useEffect, useRef, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContactFormSchema = yup.object().shape({
  name: yup.string().required("Обов'язкове поле"),
  lastName: yup.string().required("Обов'язкове поле"),
  phone: yup
    .string()
    .required("Обов'язкове поле")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Невірний формат номера"
    ),
  comment: yup.string(),
});

type Inputs = {
  name: string;
  lastName: string;
  phone: string;
  comment?: string | undefined;
};

const defaultValues = {
  name: "",
  lastName: "",
  phone: "",
  comment: "",

  rememberMe: false,
};

const ContactForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<string | null>(null);

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
    resolver: yupResolver(ContactFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[46px] cartForm text-sm font-robotoFlex max-w-[375px]  w-full  xl:w-full xl:max-w-[830px]"
    >
      <div
        className="flex flex-col relative "
        onClick={() => handleInputClick("name")}
        ref={inputRef}
      >
        <label
          htmlFor="name"
          className={`formLabel transition-all ${
            isActive === "name" || getValues("name") !== "" ? "activeLabel" : ""
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
      <div className=" flex flex-col">
        <label
          htmlFor="comment"
          className=" mb-[8px] text-[#2e2e2e] text-[14px] leading-[21px]
"
        >
          Коментар
        </label>
        <div className="  bg-gradient-to-r from-[#E5A14B] via-[#FDD559] to-[#F7C55B]  rounded-sm p-[1px] ">
          <div className="  bg-white  rounded-sm   p-[5px]">
            <div
              className="flex flex-col relative "
              onClick={() => handleInputClick("comment")}
              ref={inputRef}
            >
              <Controller
                control={control}
                name="comment"
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="bg-transparent formInput max-h-[122px]  min-h-[122px] resize-none"
                    onBlur={(e) => {
                      setValue("comment", e.target.value.trim());
                      trigger("comment");
                    }}
                  />
                )}
              />
              {errors.comment && (
                <span className="imputEfrror">{errors.comment.message}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <GoldBtn
        blockName="CartModal"
        handleClick={() => onSubmit}
        type="submit"
        className="mx-auto   "
      >
        Відправити
      </GoldBtn>
    </form>
  );
};

export default ContactForm;
