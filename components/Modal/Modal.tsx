import { ReactNode } from "react";
import Backdrop from "./Backdrop";

type Props = {
  children: ReactNode;
};

const Modal = ({ children }: Props) => {
  return (
    <Backdrop>
      <div className=" scrollbar-hidden overflow-y-scroll h-[90vh]  relative bg-[#F9F9F9] rounded py-[28px] px-[12px] md:pt-[40px] md:pb-[57px]  md:px-[40px] max-w-[468px] w-[83%] ">
        {children}
      </div>
    </Backdrop>
  );
};

export default Modal;
