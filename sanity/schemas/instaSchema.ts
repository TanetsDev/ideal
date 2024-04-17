export const instaSchema = {
  name: "insta",
  title: "Инста галерея",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string",
      description:
        "Здесь мы создаем коллекции фоток из инсты. Даем название коллекции и добавляем минимум 8 фото",
    },
    {
      name: "images",
      title: "Фото",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
