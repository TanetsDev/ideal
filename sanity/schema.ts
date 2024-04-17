import { type SchemaTypeDefinition } from "sanity";
import { boxSchema } from "./schemas/boxSchema";
import {
  boxExtraTypeSchema,
  boxFiltersSchema,
} from "./schemas/boxFiltersSchema";
import { bannerSchema } from "./schemas/bannerSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [boxSchema, boxFiltersSchema, bannerSchema, boxExtraTypeSchema],
};
