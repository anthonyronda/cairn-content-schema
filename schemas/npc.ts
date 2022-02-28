import actor from "./actor";
import common from "./common";

export default {
  name: "npc",
  type: "document",
  title: "NPC",
  fields: [
    ...common,
    {
      name: "armor",
      title: "Armor",
      type: "number",
    },
    ...actor,
  ],
};
