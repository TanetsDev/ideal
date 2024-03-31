"use client";

import { IBox } from "@/types/products.types";
import MainContainer from "../Containers/MainContainer";
import BoxList from "../Products/BoxList";
import MainGoldBtn from "../Buttons/MainGoldBtn";
import Title from "../Common/Title";
import MainSectionsBox from "../Common/MainSectionsBox";

const boxes: IBox[] = [
  {
    id: 1,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
    type: "normal",
  },
  {
    id: 2,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
    type: "hit",
  },
  {
    id: 4,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
    type: "top",
  },
  {
    id: 6,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
    type: "new",
  },
  {
    id: 7,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
    type: "normal",
  },
];

const IdealProposition = () => {
  return (
    <MainSectionsBox>
      <MainContainer className="flex flex-col items-center">
        <Title className="text-center">Ідеальна пропозиція</Title>
        <BoxList boxes={boxes} section="idealProposition" />
        <MainGoldBtn
          text={"Дивитись більше"}
          handleClick={() => console.log("Button click")}
          blockName="ideal"
        />
      </MainContainer>
    </MainSectionsBox>
  );
};

export default IdealProposition;
