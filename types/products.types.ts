import { StaticImageData } from "next/image";

export interface IBox {
  _id: string;
  title: { _key: string; value: string }[];
  price: number;
  person: number;
  imageUrls: string | StaticImageData[];
  type: BoxMarkerType;
}

export type BoxMarkerType = "new" | "hit" | "top" | "normal";

export interface ICartBox extends Omit<IBox, "type"> {
  weight: number;
}
