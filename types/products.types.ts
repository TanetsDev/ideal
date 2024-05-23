import { StaticImageData } from "next/image";
import { BoxDTO } from "./sanityData.types";

// card
export interface IBoxCard {
  _id: string;
  title: string;
  price: number;
  person: number;
  imageUrls: string | StaticImageData[];
  type: string;
}
//

export interface ICartBox extends Omit<BoxDTO, "type"> {
  weight: number;
  count: number;
}
