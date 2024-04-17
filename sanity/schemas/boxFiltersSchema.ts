export const boxFiltersSchema = {
  name: "boxTypes",
  title: "Типы боксов",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Название",
      type: "string",
    },
    {
      name: "value",
      title: "Значение",
      type: "internationalizedArrayString",
    },
  ],
};

export const boxExtraTypeSchema = {
  name: "boxExtraTypes",
  title: "Экстра-типы боксов",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string",
      description:
        "Здесь создаем екстра типы а-ля Хит сезона, Спец предложение, Бестселлер",
    },
    {
      name: "value",
      title: "Значение",
      type: "internationalizedArrayString",
      description:
        "Здесь мы указываем тоже самое, только в переводах. екстра типы а-ля Хит сезона, Спец предложение, Бестселлер",
    },
  ],
};
