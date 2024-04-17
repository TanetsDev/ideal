import { ReactNode } from "react";
import Backdrop from "./Backdrop";

type Props = {
  children: ReactNode;
};

const Modal = ({ children }: Props) => {
  return (
    <Backdrop>
      <div className=" bg-[#F9F9F9] rounded pt-4 pb-5">{children}</div>
    </Backdrop>
  );
};

export default Modal;
