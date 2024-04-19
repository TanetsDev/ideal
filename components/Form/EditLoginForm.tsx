"use client";

import UnderlineGold from "../UnderlineGold/UnderlineGold";

import { useForm, SubmitHandler } from "react-hook-form";

// import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import MainGoldBtn from "../Buttons/MainGoldBtn";

type Inputs = {
  login: number;
  password: string;
};

const EditLoginForm = () => {
  const [isLoginActive, setIsLoginActive] = useState<boolean>(false);

  const [isPasswordActive, setIsPasswordActive] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const [login, setLogin] = useState<string>("");

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
      <h2 className="hidden xl:block text-[24px] leading-[33px] pb-[30px]">
        Логін та пароль
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[46px]  text-sm font-robotoFlex max-w-[375px] mx-auto  md:w-[350px] xl:w-full xl:max-w-[830px]"
      >
        <div className="flex flex-col gap-[46px] xl:flex-row ">
          <div
            className="flex flex-col relative xl:w-full"
            onFocus={() => setIsLoginActive(true)}
            onBlur={() => setIsLoginActive(false)}
          >
            <label
              htmlFor="login"
              className={`formLabel transition-all ${
                (isLoginActive || login !== "") && "activeLabel"
              }`}
            >
              Логін *
            </label>
            <input
              {...register("login", {
                required: "Обов'язкове поле",
                onChange: (e) => setLogin(e.currentTarget.value),
              })}
              className="bg-transparent formInput"
            />
            {errors.login && (
              <span className="imputEfrror">{errors.login.message}</span>
            )}
            <UnderlineGold />
          </div>
          <div
            className="flex flex-col relative xl:w-full"
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
        </div>

        <MainGoldBtn
          blockName="CartModal"
          handleClick={() => onSubmit}
          className="mx-auto  xl:mx-0"
        >
          <input type="submit" value="Зберегти" />
        </MainGoldBtn>
      </form>
    </>
  );
};
export default EditLoginForm;
