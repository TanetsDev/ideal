export interface BannerDTO {
  name: string;
  title: string;
  text: string;
  imageUrl: string;
}

export interface BoxDTO {
  _id: string;
  name: string;
  title: InterValue[];
  dishCount: number;
  personCount: number;
  weight: number;
  price: number;
  imageUrls: string[];
  extraType: {
    title: string;
    value: InterValue;
  };
  dishes: { title: string; value: InterValue }[];
}

type InterValue = {
  value: string;
  _key: "en" | "ukr" | "ru";
  _type: string;
};
