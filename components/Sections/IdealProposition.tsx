"use client";

import MainContainer from "../Containers/MainContainer";
import BoxList from "../Products/BoxList";
import MainGoldBtn from "../Buttons/MainGoldBtn";
import Title from "../Common/Title";
import MainSectionsBox from "../Common/MainSectionsBox";
import Link from "next/link";
import useBoxesData from "@/hooks/useBoxesData";
import { useSelector } from "react-redux";
import { selectBoxesState } from "@/redux/boxes/boxesSelector";
import Loader from "../Loaders/Loader";

const IdealProposition = () => {
  const { data, error, isLoading } = useBoxesData();
  const { data: selectData } = useSelector(selectBoxesState);

  if (isLoading)
    return (
      <div className=" pt-[200px] pb-[200px] flex items-center justify-center">
        <Loader type="local" size={100} />
      </div>
    );
  if (error) {
    console.error("Error fetching boxes:", error);
    return (
      <div className=" pt-[200px] pb-[200px]">
        Error fetching boxes. Please try again later.
      </div>
    );
  }
  return (
    <MainSectionsBox>
      <MainContainer className="flex flex-col items-center">
        <Title className="text-center">Ідеальна пропозиція</Title>
        <BoxList boxes={selectData || data} section="idealProposition" />
        <Link href={"/boxes"}>
          <MainGoldBtn
            text={"Дивитись більше"}
            handleClick={() => null}
            blockName="ideal"
          />
        </Link>
      </MainContainer>
    </MainSectionsBox>
  );
};

export default IdealProposition;
