import React from "react";
import MainSectionsBox from "../Common/MainSectionsBox";
import MainContainer from "../Containers/MainContainer";
import Title from "../Common/Title";
import Image from "next/image";
import { b1, b2, b3, b4 } from "@/public/icons";

const benefits: string[] = [
  " В основі нашої компанії лежить філософія прагнення ідеалу. Ми віримо, що ідеальна їжа - це не просто гастрономічний досвід, це справжнє мистецтво насолоди.",
  " У кожному боксі ми втілюємо нашу філософію, надаючи вам можливість поринути у світ смаків та задоволення. Подарувати вам неповторні моменти радості",
  " Кожен проєкт нашої компанії - це справжня вистава стилю у поєднанні з багаторічним досвідом у ресторанному бізнесі та обслуговуванні VIP сегментів",
  " Основні принципи нашої роботи - це ідеальний сервіс, креативний підхід до оформлення та високий рівень гастрономії від наших шеф-кухарів.",
];

const icons = [b1, b2, b3, b4];

const Benefits = () => {
  return (
    <MainSectionsBox>
      <MainContainer>
        <Title className="text-start lg:text-[55px]">
          Чому <span className=" font-julius">IDEAL</span> ?
        </Title>
        <div className=" h-[617px] md:h-[477px] w-[257px] md:w-[520px] bg-cardBacsic absolute mt-7 md:mt-[46px] lg:hidden"></div>

        <ul className=" text-base lg:text-lg font-robotoFlex text-bacicBlack flex flex-col gap-[14px] lg:gap-[26px] md:max-w-[730px] lg:max-w-full md:h-[477px] lg:h-auto py-11 md:py-[46px] lg:py-[43px] bg-transparent relative mt-7  md:mt-[46px] lg:mt-12 md:pl-[137px] lg:pr-[90px] lg:bg-white">
          {benefits.map((b, i) => {
            return (
              <li key={i} className="flex gap-[11px] lg:max-w-[704px] self-end">
                <Image
                  src={icons[i]}
                  alt="Іконка цифри"
                  className=" w-[31px] lg:w-[40px] h-[23px] lg:h-[27px]"
                />
                <p className=" pt-[14px]">{b}</p>
              </li>
            );
          })}
        </ul>
      </MainContainer>
    </MainSectionsBox>
  );
};

export default Benefits;
