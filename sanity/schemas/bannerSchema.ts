export const bannerSchema = {
  name: "banner",
  title: "Баннер",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Название",
      type: "string",
    },
    {
      name: "title",
      title: "Заголовок",
      type: "internationalizedArrayString",
    },
    {
      name: "text",
      title: "Текст",
      type: "internationalizedArrayString",
    },
    {
      name: "image",
      title: "Картинки",
      type: "image",
    },
  ],
};
