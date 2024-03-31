import { brCrump } from "@/public/icons";
import { IBreadCrumb } from "@/types/market.types";
import Image from "next/image";
import Link from "next/link";

const BreadCrumbs = ({ crumps }: { crumps: IBreadCrumb[] }) => {
  return (
    <div className="mt-[20px]">
      <ul className="text-sm text-basicBlack flex gap-[6px]">
        {crumps.map((crump, i) => (
          <li key={i} className="flex items-center">
            <Link href={crump.path}>{crump.name}</Link>
            {i < crumps.length - 1 && (
              <Image
                src={brCrump}
                alt="Іконка вперед"
                className=" ml-[6px] size-[17px]"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
