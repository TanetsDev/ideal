export const boxSchema = {
  name: "box",
  title: "Box",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Название для работы",
      type: "string",
    },
    {
      name: "title",
      title: "Название для отрисовки",
      type: "internationalizedArrayString",
      description: "Название бокса на трех языках",
    },
    {
      name: "dishes",
      title: "Наполнение бокса",
      type: "array",
      of: [{ type: "reference", to: [{ type: "boxComponents" }] }],
      description:
        "Выбираем наполнение или создаем блюдо, оно сохраниться и потом можно его переиспользовать",
    },
    {
      name: "boxType",
      title: "Тип бокса",
      type: "array",
      of: [{ type: "reference", to: [{ type: "boxTypes" }] }],
      description:
        "Боксы могут быть только известных программе типов, ели тип не создан- создаем его и добавляем",
    },
    { name: "dishCount", title: "Колличество закусок в боксе", type: "number" },
    {
      name: "personCount",
      title: "На сколько персон расчитан",
      type: "number",
    },
    { name: "weight", title: "Выход", type: "number" },
    { name: "price", title: "Цена", type: "number" },
    {
      name: "images",
      title: "Фото бокса",
      type: "array",
      of: [{ type: "image" }],
      description:
        "Загружаем сюда по 4 фотографии на каждый бокс. ВАЖНО: первой фотографией загружаем ту что будет основной",
    },
    {
      name: "extraType",
      title: "Экстра тип",
      type: "reference",
      to: [{ type: "boxExtraTypes" }],
      description:
        "Принимается: Новинка, Бестселлер, Хит сезона, выбираем из списка или добавляем новый",
    },
  ],
};
