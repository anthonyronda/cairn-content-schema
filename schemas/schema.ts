// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import character from "./character";
import npc from "./npc";
import item from "./item";
import armor from "./armor";
import spellbook from "./spellbook";
import weapon from "./weapon";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "foundryPacks",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    character,
    npc,
    item,
    armor,
    spellbook,
    weapon,
  ]),
});
