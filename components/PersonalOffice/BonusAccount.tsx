import GoldLink from "../Buttons/GoldLink";

const BonusAccount = () => {
  return (
    <>
      <h2 className="hidden xl:block text-[24px] leading-[33px] pb-[30px]">
        Бонусний рахунок
      </h2>

      <div className="  bg-gradient-to-r from-[#E5A14B] via-[#FDD559] to-[#F7C55B]  rounded-sm p-[1px] w-[224px] m-auto md:mr-auto md:ml-0">
        <div className="  bg-[#fff]  rounded-sm px-[50px] py-[15px] w-[222px] ">
          <p className=" text-center text-[18px]  leading-[27px] text-[#040404] font-roboto ">
            Накопичено
          </p>
          <p className="  text-center text-[22px] leading-[33px] text-[#040404] font-roboto ">
            100 бонусів
          </p>
        </div>
      </div>
      <p className="py-[25px]  text-center md:text-start text-[16px] leading-[24px] text-basicBlack font-roboto">
        Ви маєте змогу обміняти бонуси на знижку при покупці товару 1 бонус 1
        гривня
      </p>
      <GoldLink href="/boxes">До покупок</GoldLink>
    </>
  );
};

export default BonusAccount;
