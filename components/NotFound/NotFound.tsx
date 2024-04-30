import Image from "next/image";
import GoldLink from "../Buttons/GoldLink";

const NotFound = () => {
  return (
    <section
      className="pt-[63px] flex absolute bottom-0 top-0 left-0  min-h-full w-full  bg-[#605F5F];
"
    >
      <Image
        src="/images/slidersImages/aboutBox/Rectangle 18.jpg"
        alt="Box"
        className=" w-1/3 min-h-full "
        width="200"
        height="300"
      />
      <div className="  px-[20px] text-[#FFFFFF] w-2/3 bg-[#1F1F1F] flex flex-col justify-center ">
        {/* <h2 className=" text-center  font-manrope pb-[20px] text-[100px]  leading-[80px]">
          404
        </h2> */}
        <ul className="flex gap-[15px] justify-center text-center  font-manrope pb-[20px] md:pb-[28px] text-[100px]  leading-[80px] md:text-[140px] md:leading-[120px] xl:text-[200px] xl:leading-[150px]">
          <li>
            <h2>4</h2>
          </li>
          <li>
            <h2>0</h2>
          </li>
          <li>
            <h2>4</h2>
          </li>
        </ul>
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
