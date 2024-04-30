import Image from "next/image";
import GoldLink from "../Buttons/GoldLink";

const NotFound = () => {
  return (
    <section
      className="pt-[63px] flex absolute bottom-0 top-0 left-0  min-h-full w-full  bg-[#605F5F];
"
    >
      <Image
        src="/rol.jpg"
        alt="Box"
        className=" w-full min-h-full "
        width="200"
        height="300"
      />
      <div className=" absolute max-w-[386px] md:max-w-[684px] w-2/3 md:w-1/2 right-0 bottom-0 top-0  px-[20px] text-[#FFFFFF] bg-[#1F1F1F] flex flex-col justify-center ">
        <div className="flex gap-[15px] justify-center text-center  font-manrope pb-[20px] md:pb-[28px] text-[100px]  leading-[80px] md:text-[140px] md:leading-[120px] xl:text-[200px] xl:leading-[150px]">
          <p>
            <span>4</span>
          </p>
          <p>
            <span>0</span>
          </p>
          <p>
            <span>4</span>
          </p>
        </div>
        <h3 className="pb-[73px] text-center  font-manrope text-[22px] font-semibold leading-[39px] md:text-[34px] md:leading-[51px] xl:text-[40px] xl:leading-[60px]">
          Page not found
        </h3>

        <div className="pt-[5px]  pb-[32px] xl:flex xl:justify-center">
          <p className="text-[14px]font-medium  leading-[21px] md:text-[20px] md:leading-[30px] ">
            Щось пішло не так ..
          </p>
          <p className=" text-[14px] font-medium leading-[21px] md:text-[20px] md:leading-[30px]">
            Повертайся на головну скоріше
          </p>
        </div>
        <div className="xl:flex xl:justify-center">
          <GoldLink href="/">До головної</GoldLink>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
