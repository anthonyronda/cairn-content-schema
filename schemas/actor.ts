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
    initialValue: 10,
  },
  {
    name: "DEX",
    title: "DEX",
    type: "number",
    initialValue: 10,
  },
  {
    name: "WIL",
    title: "WIL",
    type: "number",
    initialValue: 10,
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
