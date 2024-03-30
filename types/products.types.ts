export interface IBox {
  id: number;
  title: string;
  price: number;
  person: number;
  imageUrl: string;
  type: BoxMarkerType;
}

export type BoxMarkerType = "new" | "hit" | "top" | "normal";
