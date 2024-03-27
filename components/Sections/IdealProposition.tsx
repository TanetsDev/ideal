import MainContainer from "../Containers/MainContainer";
import BoxList from "../Products/BoxList";

const boxes = [
  {
    id: 1,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
  },
  {
    id: 2,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
  },
  {
    id: 3,
    title: "Супер бокс",
    price: 160,
    person: 4,
    imageUrl: "",
  },
];

const IdealProposition = () => {
  return (
    <section className=" pt-[50px]">
      <MainContainer>
        <h2 className=" text-basicBlack text-[26px] font-manrope text-center">
          {"Ідеальна пропозиція"}
        </h2>
        <BoxList boxes={boxes} />
      </MainContainer>
    </section>
  );
};

export default IdealProposition;
