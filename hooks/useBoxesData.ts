import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetBoxesQuery } from "@/redux/boxes/boxesApi";
import { setData } from "@/redux/boxes/boxesSlice";

const useBoxesData = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetBoxesQuery({
    filters: { types: "all" },
  });

  useEffect(() => {
    if (data) {
      dispatch(setData(data));
    }
    if (error) {
      if ("status" in error && "data" in error) {
        console.error("Error fetching boxes:", error.status, error.data);
      } else {
        console.error("Error fetching boxes:", error);
      }
    }
  }, [data, error, dispatch]);

  return { data, error, isLoading };
};

export default useBoxesData;
