export default {
  name: "character",
  type: "document",
  title: "Character",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "img",
      title: "Image",
      type: "image",
    },
    {
      name: "background",
      title: "Background",
      type: "string",
    },
    {
      name: "gold",
      title: "Gold",
      type: "number",
      initialValue: 0,
    },
    {
      name: "biography",
      title: "Biography",
      type: "text",
    },
    {
      name: "hp",
      title: "HP",
      type: "number",
    },
    {
      name: "STR",
      title: "STR",
      type: "number",
    },
    {
      name: "DEX",
      title: "DEX",
      type: "number",
    },
    {
      name: "WIL",
      title: "WIL",
      type: "number",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "weapon" }],
    },
  ],
};
