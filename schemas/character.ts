import actor from "./actor";
import common from "./common";

export default {
  name: "character",
  type: "document",
  title: "Character",
  fields: [
    ...common,
    {
      name: "gold",
      title: "Gold",
      type: "number",
      initialValue: 0,
    },
    {
      name: "background",
      title: "Background",
      type: "string",
    },
    {
      name: "deprived",
      title: "Deprived",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "biography",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
    },
    ...actor,
  ],
};
