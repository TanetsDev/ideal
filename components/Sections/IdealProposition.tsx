"use client";

import MainContainer from "../Containers/MainContainer";
import BoxList from "../Products/BoxList";
import MainGoldBtn from "../Buttons/MainGoldBtn";
import Title from "../Common/Title";
import MainSectionsBox from "../Common/MainSectionsBox";
import Link from "next/link";
import { useGetBoxesQuery } from "@/redux/boxes/boxesApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setData, setError, setLoading } from "@/redux/boxes/boxesSlice";

const IdealProposition = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetBoxesQuery({
    filters: { types: "all" },
  });

  useEffect(() => {
    if (data) {
      dispatch(setData(data));
      dispatch(setLoading(false));
    }
    if (error) {
      if ("status" in error && "data" in error) {
        // Якщо це FetchBaseQueryError
        console.error("Error fetching boxes:", error.status, error.data);
        dispatch(setError("Error fetching boxes. Please try again later."));
      } else {
        // Якщо це SerializedError
        console.error("Error fetching boxes:", error);
        dispatch(setError("Error fetching boxes. Please try again later."));
      }
      dispatch(setLoading(false));
    }
  }, [data, error, dispatch]);

  if (isLoading)
    return <div className=" pt-[200px] pb-[200px]">Loading...</div>;
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
        <BoxList boxes={data} section="idealProposition" />
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
