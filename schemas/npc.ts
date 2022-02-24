export default {
  name: "npc",
  type: "document",
  title: "NPC",
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
      name: "description",
      title: "Description",
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
      name: "armor",
      title: "Armor",
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
