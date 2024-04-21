"use client";

import UnderlineGold from "../UnderlineGold/UnderlineGold";

import { useForm, SubmitHandler } from "react-hook-form";

// import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";

import GoldBtn from "../Buttons/GoldBtn";

type Inputs = {
  phone: number;
  password: string;
};

const SingInForm = () => {
  const [isPhoneActive, setIsPhoneActive] = useState<boolean>(false);

  const [isPasswordActive, setIsPasswordActive] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const [phone, setPhone] = useState<string>("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[46px] cartForm text-sm font-robotoFlex max-w-[375px] mx-auto md:w-[350px]"
      >
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
          onFocus={() => setIsPasswordActive(true)}
          onBlur={() => setIsPasswordActive(false)}
        >
          <label
            htmlFor="password"
            className={`formLabel transition-all flex w-full justify-between  ${
              (isPasswordActive || password !== "") && "activeLabel"
            }`}
          >
            Пароль *
            <svg
              onClick={togglePasswordVisibility}
              width="22px"
              height="22px"
              className="fill-[#535252] hover:cursor-pointer"
            >
              <use
                href={
                  showPassword
                    ? "/symbol-defs.svg#eye"
                    : "/symbol-defs.svg#eye-slash"
                }
              ></use>
            </svg>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", {
              required: "Обов'язкове поле",
              onChange: (e) => setPassword(e.currentTarget.value),
            })}
            className="bg-transparent formInput"
          />
          {errors.password && (
            <span className="imputEfrror">{errors.password.message}</span>
          )}
          <UnderlineGold />
        </div>

        <GoldBtn
          blockName="EditForm"
          handleClick={() => onSubmit}
          type="submit"
          className="mx-auto  md:w-[234px] "
        >
          Увійти
        </GoldBtn>
      </form>
    </>
  );
};
export default SingInForm;
