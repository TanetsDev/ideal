"use client";

import Link from "next/link";

import MainContainer from "../Containers/MainContainer";
import { usePathname, useRouter } from "next/navigation";
import UnderlineGold from "../UnderlineGold/UnderlineGold";

import GoldBtn from "../Buttons/GoldBtn";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { useEffect, useRef, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSignUpMutation } from "@/redux/auth/authApi";
import { useSelector } from "react-redux";
import authSelector from "@/redux/auth/authSelector";

const RegistrationFormSchema = yup.object().shape({
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
  password: yup.string().required("Обов'язкове поле"),
  confirmPassword: yup
    .string()
    .required("Обов'язкове поле")
    .oneOf([yup.ref("password")], "Паролі не співпадають"),
});

type Inputs = {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
};

const defaultValues = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  password: "",
  confirmPassword: "",
  rememberMe: false,
};

const Registration = () => {
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<string | null>(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const [register, { isLoading }] = useSignUpMutation();

  const router = useRouter();

  const token = useSelector(authSelector.selectToken);

  useEffect(() => {
    token ? router.push("/") : "";
  }, [token, router]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
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
    resolver: yupResolver(RegistrationFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const userData = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      address: data.address,
      password: data.password,
      phone: Number(data.phone),
    };

    try {
      const user = await register(userData);
      if (user) {
        console.log("NEW USER", user);
      }
      reset();
    } catch (error) {
      console.log("Invalid login or password.");
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

          <div
            ref={inputRef}
            onClick={() => handleInputClick("confirmPassword")}
            className="flex flex-col relative xl:w-full "
          >
            <label
              htmlFor="confirmPassword"
              className={`formLabel transition-all ${
                isActive === "confirmPassword" ||
                getValues("confirmPassword") !== ""
                  ? "activeLabel"
                  : ""
              }`}
            >
              Підтвердіть пароль *
            </label>
            <svg
              onClick={toggleConfirmPasswordVisibility}
              width="22px"
              height="22px"
              className="fill-[#535252] hover:cursor-pointer absolute  top-0 right-[5px]"
            >
              <use
                href={
                  showConfirmPassword
                    ? "/symbol-defs.svg#eye"
                    : "/symbol-defs.svg#eye-slash"
                }
              ></use>
            </svg>

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <input
                  {...field}
                  type={showConfirmPassword ? "text" : "password"}
                  className="bg-transparent formInput pl-[10px] pr-[35px]"
                  onBlur={(e) => {
                    setValue("confirmPassword", e.target.value.trim());
                    trigger("confirmPassword");
                  }}
                />
              )}
            />
            {errors.confirmPassword && (
              <span className="imputEfrror">
                {errors.confirmPassword.message}
              </span>
            )}
            <UnderlineGold />
          </div>

          <GoldBtn
            blockName="EditForm"
            handleClick={() => onSubmit}
            type="submit"
            className="mx-auto  md:w-[234px] "
          >
            {isLoading ? "loading" : "Зареєструватись"}
          </GoldBtn>
        </form>
      </MainContainer>
    </section>
  );
};

export default Registration;
