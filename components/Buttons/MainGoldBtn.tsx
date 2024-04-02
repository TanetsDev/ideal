"use client";
const W = {
  343: "w-[343px]",
  286: "w-[286px]",
  126: "w-[126px]",
  144: "w-[144px]",
  162: "w-[162px]",
  182: "w-[182px]",
  234: "w-[234px]",
};

const H = {
  40: "h-[40px]",
  44: "h-[44px]",
  54: "h-[45px]",
};

const BW = {
  286: "w-[284px]",
  162: "w-[160px]",
} as typeof W;
const BH = {
  54: "h-[52px]",
  40: "h-[38px]",
} as typeof H;

const getBtnSize = (blockName: string) => {
  switch (blockName) {
    case "ideal":
      return "w-[343px] h-[45px] md:w-[162px] md:h-[40px]";

    case "footer":
      return "w-[126px] lg:w-[144px] h-[40px] lg:h-[44px]";

    case "boxDetails":
      return "w-[343px]  h-[40px] md:w-[144px] ";

    default:
      return "";
  }
};

interface IProps {
  text: string;
  blockName: string;
  bordered?: boolean;
  handleClick: () => void;
  className?: string;
}

const MainGoldBtn = ({
  text,
  blockName,
  bordered = false,
  handleClick,
  className,
}: IProps) => {
  if (bordered)
    return (
      <div
        className={`${getBtnSize(
          blockName
        )} flex items-center justify-center bg-goldPrimaryBtn rounded p-[2px]`}
      >
        <button
          type="button"
          onClick={handleClick}
          className={`w-full h-full flex items-center justify-center bg-cardBacsic text-sm font-robotoFlex text-basicBlack rounded`}
        >
          {text}
        </button>
      </div>
    );

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${getBtnSize(
        blockName
      )}  flex items-center justify-center bg-goldPrimaryBtn text-sm font-robotoFlex text-basicBlack rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default MainGoldBtn;
