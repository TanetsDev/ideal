import { Triangle } from "react-loader-spinner";

const Loader = ({ isVisible, size }: { isVisible: boolean; size: number }) => {
  return (
    <Triangle
      visible={isVisible}
      height={size}
      width={size}
      color="#E5A14B"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
