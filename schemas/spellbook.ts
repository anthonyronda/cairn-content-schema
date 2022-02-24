export default {
  name: "spellbook",
  type: "document",
  title: "Spellbook",
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
    {
      name: "slots",
      title: "Slots",
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
    {
      name: "blast",
      title: "Blast",
      type: "boolean",
    },
  ],
};
