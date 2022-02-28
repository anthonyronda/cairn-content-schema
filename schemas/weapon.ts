import common from "./common";
import universalItem from "./universalItem";

export default {
  name: "weapon",
  type: "document",
  title: "Weapon",
  fields: [
    ...common,
    {
      name: "damageFormula",
      title: "Damage Formula",
      type: "string",
    },
    {
      name: "bulky",
      title: "Bulky",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "blast",
      title: "Blast",
      type: "boolean",
      initialValue: false,
    },
    ...universalItem,
  ],
};
