import GoldLink from "@/components/Buttons/GoldLink";
import Title from "@/components/Common/Title";
import MainContainer from "@/components/Containers/MainContainer";

const OrderSubmitted = () => {
  return (
    <MainContainer className="pt-[50px] md:pt-[60px] flex flex-col items-center gap-[20px]">
      <Title className="text-center">Дякуємо за замовлення</Title>
      <p className="text-center text-basicBlack font-manrope py-[28px] md:pt[48px] md:pb[24px] texp-[18px] leading-[25px] md:texp-[22px] md:leading-[30px]">
        Ваш номер замовлення 52369872
      </p>
      <p className="text-center text-basicBlack font-roboto pb-[40px] texp-[16px] leading-[24px] md:texp-[21px] ">
        У найближчий час з вами зв’яжеться менеджер для підтвердження замовлення
      </p>
      <GoldLink href="/">До головної </GoldLink>
    </MainContainer>
  );
};
export default OrderSubmitted;
