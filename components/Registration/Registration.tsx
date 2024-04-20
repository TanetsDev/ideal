"use client";

import Link from "next/link";

import MainContainer from "../Containers/MainContainer";
import { usePathname } from "next/navigation";
import UnderlineGold from "../UnderlineGold/UnderlineGold";
import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import GoldBtn from "../Buttons/GoldBtn";

type Inputs = {
  name: string;
  lastName: string;
  phone: number;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
};

const Registration = () => {
  const pathname = usePathname();

  const [isNameActive, setIsNameActive] = useState<boolean>(false);
  const [isLastNameActive, setIsLastNameActive] = useState<boolean>(false);
  const [isAddressActive, setIsAddressActive] = useState<boolean>(false);
  const [isPhoneActive, setIsPhoneActive] = useState<boolean>(false);
  const [isEmailActive, setIsEmailActive] = useState<boolean>(false);

  const [isPasswordActive, setIsPasswordActive] = useState<boolean>(false);
  const [isConfirmPasswordActive, setIsConfirmPasswordActive] =
    useState<boolean>(false);

  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.password !== data.confirmPassword) {
      setPasswordError("Паролі не співпадають");
    } else {
      console.log(data);
      setPasswordError("");
      reset();
    }
  };
  return (
    <section className=" pt-[114px] md:pt-[136px] lg:pt-[161px] pb-[50px]  ">
      <MainContainer className="  lg:gap-[27px]  justify-center  ">
        <div className="flex mb-[40px] text-2xl font-manrope text-basicBlack   justify-center mx-auto gap-[60px] md:text-base md:mb-[50px] lg:w-[400px] leading-9">
          <Link
            href={"/sign_in"}
            className={`${
              pathname === "/sign_in" ? "border-b-[1px] border-black " : ""
            }  text-2xl`}
          >
            Увійти
          </Link>

          <Link
            href={"/registration"}
            className={`${
              pathname === "/registration" ? "border-b-[1px] border-black " : ""
            }  text-2xl`}
          >
            Реєстрація
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[46px] cartForm text-sm font-robotoFlex max-w-[375px] mx-auto md:w-[350px]"
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
                required: "Обов'язкове поле",
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
              Прізвище *
            </label>
            <input
              {...register("lastName", {
                required: "Обов'язкове поле",
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
            onFocus={() => setIsEmailActive(true)}
            onBlur={() => setIsEmailActive(false)}
          >
            <label
              htmlFor="email"
              className={`formLabel transition-all ${
                (isEmailActive || email !== "") && "activeLabel"
              }`}
            >
              Пошта *
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Обов'язкове поле",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Невірний формат email",
                },
                onChange: (e) => setEmail(e.currentTarget.value),
              })}
              className="bg-transparent formInput "
            />
            {errors.email && (
              <span className="imputEfrror">{errors.email.message}</span>
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

          <div
            className="flex flex-col relative"
            onFocus={() => setIsConfirmPasswordActive(true)}
            onBlur={() => setIsConfirmPasswordActive(false)}
          >
            <label
              htmlFor="confirmPassword"
              className={`formLabel transition-all flex w-full justify-between  ${
                (isConfirmPasswordActive || confirmPassword !== "") &&
                "activeLabel"
              }`}
            >
              Підтвердіть пароль *
              <svg
                onClick={toggleConfirmPasswordVisibility}
                width="22px"
                height="22px"
                className="fill-[#535252] hover:cursor-pointer"
              >
                <use
                  href={
                    showConfirmPassword
                      ? "/symbol-defs.svg#eye"
                      : "/symbol-defs.svg#eye-slash"
                  }
                ></use>
              </svg>
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Обов'язкове поле",
                onChange: (e) => setConfirmPassword(e.currentTarget.value),
              })}
              className="bg-transparent formInput"
            />
            {errors.confirmPassword && (
              <span className="imputEfrror">
                {errors.confirmPassword.message}
              </span>
            )}
            {passwordError && (
              <span className="imputEfrror">{passwordError}</span>
            )}

            <UnderlineGold />
          </div>

          <GoldBtn
            blockName="EditForm"
            handleClick={() => onSubmit}
            type="submit"
            className="mx-auto  md:w-[234px] "
          >
            Зареєструватись
          </GoldBtn>
        </form>
      </MainContainer>
    </section>
  );
};

export default Registration;
