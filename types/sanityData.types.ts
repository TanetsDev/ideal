import { StaticImageData } from "next/image";

export interface BannerDTO {
  name: string;
  title: string;
  text: string;
  imageUrl: string;
}

export interface BoxDTO {
  _id: string;
  name: string;
  title: InterValue;
  dishCount: number;
  personCount: number;
  weight: number;
  price: number;
  imageUrls: string[] | StaticImageData[];
  extraType: {
    title: string;
    value: InterValue;
  };
  dishes: { title: string; value: InterValue }[];
}

type InterValue = {
  value: string;
  _key: "en" | "ukr" | "ru";
}[];

export type BoxTypes = {
  _id: string;
  value: InterValue;
};
