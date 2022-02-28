export default [
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
    of: [
      { type: "armor" },
      { type: "item" },
      { type: "spellbook" },
      { type: "weapon" },
    ],
  },
];
