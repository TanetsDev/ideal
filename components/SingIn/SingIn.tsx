"use client";

import Link from "next/link";

import MainContainer from "../Containers/MainContainer";
import { usePathname, useRouter } from "next/navigation";

import SingInForm from "../Form/SingInForm";
import GoogleAuth from "../Google/GoogleAuth";
import { useSelector } from "react-redux";
import authSelector from "@/redux/auth/authSelector";
import { useEffect } from "react";

const SingIn = () => {
  const pathname = usePathname();
  const router = useRouter();

  const token = useSelector(authSelector.selectToken);
  useEffect(() => {
    token ? router.push("/") : "";
  }, [token, router]);

  return (
    <section className=" pt-[120px] md:pt-[140px] xl:pt-[160px] pb-[50px]  ">
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
        <SingInForm />
        <p className="max-w-[375px] mx-auto md:w-[350px] pt-[20px] text-sm leading-[16px] text-center mb-5">
          Або за допомогою
        </p>
        <GoogleAuth />
      </MainContainer>
    </section>
  );
};
export default SingIn;
