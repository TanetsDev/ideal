import { StaticImageData } from "next/image";

export interface IBox {
  id: number;
  title: string;
  price: number;
  person: number;
  imageUrl: string | StaticImageData;
  type: BoxMarkerType;
}

export type BoxMarkerType = "new" | "hit" | "top" | "normal";

export interface ICartBox extends Omit<IBox, "type"> {
  weight: number;
}
