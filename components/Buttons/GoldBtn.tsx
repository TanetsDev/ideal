const getBtnSize = (blockName: string) => {
  switch (blockName) {
    case "ideal":
      return "w-[343px] h-[45px] md:w-[162px] md:h-[40px]";

    case "footer":
      return "w-[126px] lg:w-[144px] h-[40px] lg:h-[44px]";

    case "boxDetails":
      return "w-[343px]  h-[40px] md:w-[144px] ";

    case "CartModal":
      return "w-full  h-[54px]  md:w-[182px] md:h-[40px]";

    case "EditForm":
      return "w-full  h-[54px]  md:w-[162px] md:h-[40px]";

    default:
      return "";
  }
};

type ButtonProps = {
  handleClick: () => void;
  children: React.ReactNode;
  className?: string;
  blockName: string;
  type?: "button" | "submit" | "reset";
};

const GoldBtn: React.FC<ButtonProps> = ({
  handleClick,
  children,
  className = "",
  blockName,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${getBtnSize(
        blockName
      )}  flex items-center justify-center bg-goldPrimaryBtn text-sm font-robotoFlex text-basicBlack rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default GoldBtn;
