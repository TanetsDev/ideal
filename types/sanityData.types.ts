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
  images: string[];
  extraType: {
    title: string;
  };
  dishes:{};
}

type Obj = {
  title: string;
  value: InterValue[];
};

type InterValue = {
  value: string;
  _key: "en" | "ukr" | "ru";
  _type: string;
};
