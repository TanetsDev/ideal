import { ReactNode } from "react";
import Backdrop from "./Backdrop";
import { ClickAwayListener } from "@mui/material";

type Props = {
  children: ReactNode;
  className?: string;
  onClose: () => void;
};

const Modal = ({ children, className, onClose }: Props) => {
  return (
    <Backdrop>
      <ClickAwayListener onClickAway={onClose}>
        <div
          className={`scrollbar-hidden overflow-y-scroll  relative bg-[#F9F9F9] rounded   w-[83%] ${className}`}
        >
          {children}
        </div>
      </ClickAwayListener>
    </Backdrop>
  );
};

export default Modal;
