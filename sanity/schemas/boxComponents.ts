export const boxComponentsSchema = {
  name: "boxComponents",
  title: "Блюда, наполнение боксов",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string",
      description: "Название блюда для работы с записью",
    },
    {
      name: "value",
      title: "Значение",
      type: "internationalizedArrayString",
      description: "Название блюда на трех языках",
    },
  ],
};
