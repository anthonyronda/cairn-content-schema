import common from "./common";
import universalItem from "./universalItem";

export default {
  name: "spellbook",
  type: "document",
  title: "Spellbook",
  fields: [...common, ...universalItem],
};
