import { ReactNode } from "react";
import Backdrop from "./Backdrop";

type Props = {
  children: ReactNode;
  className?: string;
};

const Modal = ({ children, className }: Props) => {
  return (
    <Backdrop>
      <div
        className={`scrollbar-hidden overflow-y-scroll h-[90vh] relative bg-[#F9F9F9] rounded   w-[83%] ${className}`}
      >
        {children}
      </div>
    </Backdrop>
  );
};

export default Modal;
