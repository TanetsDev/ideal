import { Triangle } from "react-loader-spinner";
import Backdrop from "../Modal/Backdrop";

const Loader = ({ size, type }: { size: number; type: "global" | "local" }) => {
  if (type === "local") {
    return (
      <Triangle
        visible={true}
        height={size}
        width={size}
        color="#E5A14B"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }

  return (
    <Backdrop>
      <Triangle
        visible={true}
        height={size}
        width={size}
        color="#E5A14B"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Backdrop>
  );
};

export default Loader;
