import common from "./common";
import universalItem from "./universalItem";

export default {
  name: "item",
  type: "document",
  title: "Item",
  fields: [
    ...common,
    {
      name: "armor",
      title: "Armor",
      type: "number",
      initialValue: 1,
    },
    {
      name: "damageFormula",
      title: "Damage Formula",
      type: "string",
    },
    {
      name: "numberOfUses",
      title: "Number of Uses",
      type: "number",
      initialValue: 0,
    },
    ...universalItem,
  ],
};
