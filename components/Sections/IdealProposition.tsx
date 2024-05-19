"use client";

import MainContainer from "../Containers/MainContainer";
// import BoxList from "../Products/BoxList";
import MainGoldBtn from "../Buttons/MainGoldBtn";
import Title from "../Common/Title";
import MainSectionsBox from "../Common/MainSectionsBox";
import Link from "next/link";
import useBoxesData from "@/hooks/useBoxesData";
import Loader from "../Loaders/Loader";
import IdealPropositionSwiper from "../Swipers/IdealPropositionSwiper";

const IdealProposition = () => {
  //TO DO create SSR fetching
  const { data, error, isLoading } = useBoxesData();

  if (isLoading)
    return (
      <div className=" pt-[200px] pb-[200px] flex items-center justify-center">
        <Loader type="local" size={100} />
      </div>
    );

  // ?? *** doing sonething with this !!!
  if (error) {
    console.error("Error fetching boxes:", error);
    return (
      <div className=" pt-[200px] pb-[200px]">
        Error fetching boxes. Please try again later.
      </div>
    );
  }
  return (
    <MainSectionsBox className="lg:max-w-full">
      <MainContainer className="flex flex-col items-center lg:max-w-full">
        <Title className="text-center">Ідеальна пропозиція</Title>
        {/* <BoxList boxes={selectData || data} section="idealProposition" /> */}
        <IdealPropositionSwiper boxes={data} />
        <Link href={"/boxes"} className=" mt-[40px]">
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
