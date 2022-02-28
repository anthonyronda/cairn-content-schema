import common from "./common";
import universalItem from "./universalItem";

export default {
  name: "armor",
  type: "document",
  title: "Armor",
  fields: [
    ...common,
    {
      name: "armor",
      title: "Armor",
      type: "number",
      initialValue: 1,
    },
    {
      name: "bulky",
      title: "Bulky",
      type: "boolean",
      initialValue: false,
    },
    ...universalItem,
  ],
};
