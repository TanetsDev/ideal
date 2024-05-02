import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetBoxesQuery } from "@/redux/boxes/boxesApi";
import { setData, setError, setLoading } from "@/redux/boxes/boxesSlice";

const useBoxesData = () => {
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
        console.error("Error fetching boxes:", error.status, error.data);
        dispatch(setError("Error fetching boxes. Please try again later."));
      } else {
        console.error("Error fetching boxes:", error);
        dispatch(setError("Error fetching boxes. Please try again later."));
      }
      dispatch(setLoading(false));
    }
  }, [data, error, dispatch]);

  return { data, error, isLoading };
};

export default useBoxesData;
