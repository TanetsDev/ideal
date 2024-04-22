import Link from "next/link";

type LinkProps = {
  children: React.ReactNode;
  href: string;
};

const GoldLink: React.FC<LinkProps> = ({ href, children }: LinkProps) => {
  return (
    <Link
      href={href}
      className={` w-full  h-[54px]  md:w-[162px] md:h-[40px]
      flex items-center justify-center bg-goldPrimaryBtn text-sm font-robotoFlex text-basicBlack rounded `}
    >
      {children}
    </Link>
  );
};

export default GoldLink;
