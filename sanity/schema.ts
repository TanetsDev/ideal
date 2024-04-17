import { type SchemaTypeDefinition } from "sanity";
import { boxSchema } from "./schemas/boxSchema";
import { boxExtraTypeSchema, boxTypesSchema } from "./schemas/boxFiltersSchema";
import { bannerSchema } from "./schemas/bannerSchema";
import { boxComponentsSchema } from "./schemas/boxComponents";
import { instaSchema } from "./schemas/instaSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    boxSchema,
    boxTypesSchema,
    bannerSchema,
    boxExtraTypeSchema,
    boxComponentsSchema,
    instaSchema,
  ],
};
