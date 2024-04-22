"use client";

import UnderlineGold from "../UnderlineGold/UnderlineGold";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { useEffect, useRef, useState } from "react";

import GoldBtn from "../Buttons/GoldBtn";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  phone: string;
  password: string;
};
const EditFormSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Обов'язкове поле")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Невірний формат номера"
    ),
  password: yup.string().required("Обов'язкове поле"),
});
const defaultValues = {
  phone: "",
  password: "",
  rememberMe: false,
};

const EditLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
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
    resolver: yupResolver(EditFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <h2 className="hidden xl:block text-[24px] leading-[33px] pb-[30px]">
        Логін та пароль
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[46px]  text-sm font-robotoFlex max-w-[375px]   md:w-[350px] xl:w-full xl:max-w-[830px]"
      >
        <div className="flex flex-col gap-[46px] xl:flex-row ">
          <div
            onClick={() => handleInputClick("phone")}
            ref={inputRef}
            className="flex flex-col relative xl:w-full "
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
          <div
            ref={inputRef}
            onClick={() => handleInputClick("password")}
            className="flex flex-col relative xl:w-full "
          >
            <label
              htmlFor="password"
              className={`formLabel transition-all ${
                isActive === "password" || getValues("password") !== ""
                  ? "activeLabel"
                  : ""
              }`}
            >
              Пароль *
            </label>
            <svg
              onClick={togglePasswordVisibility}
              width="22px"
              height="22px"
              className="fill-[#535252] hover:cursor-pointer absolute  top-0 right-[5px]"
            >
              <use
                href={
                  showPassword
                    ? "/symbol-defs.svg#eye"
                    : "/symbol-defs.svg#eye-slash"
                }
              ></use>
            </svg>

            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  className="bg-transparent formInput pl-[10px] pr-[35px]"
                  onBlur={(e) => {
                    setValue("password", e.target.value.trim());
                    trigger("password");
                  }}
                />
              )}
            />
            {errors.password && (
              <span className="imputEfrror">{errors.password.message}</span>
            )}
            <UnderlineGold />
          </div>
        </div>

        <GoldBtn
          blockName="EditForm"
          handleClick={() => onSubmit}
          type="submit"
        >
          Зберегти
        </GoldBtn>
      </form>
    </>
  );
};
export default EditLoginForm;
