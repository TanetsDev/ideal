export const boxSchema = {
  name: "box",
  title: "Box",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string",
    },
    {
      name: "dishes",
      title: "Блюда, которые входят",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "boxType",
      title: "Box Type",
      type: "array",
      of: [{ type: "reference", to: [{ type: "boxTypes" }] }],
      description:
        "Боксы могут быть только известных программе типов, ели мы создаем новый тип- то обязательно добавляем его в модель Типов!!",
    },
    { name: "dishCount", title: "Dish count", type: "number" },
    { name: "personCount", title: "Person count", type: "number" },
    { name: "weight", title: "Выход", type: "number" },
    { name: "price", title: "Price", type: "number" },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },

    {
      name: "extraType",
      title: "Extra type",
      type: "string",
      description: "Принимаеться: Новинка, Бестселлер, Хит сезона",
    },
  ],
};
