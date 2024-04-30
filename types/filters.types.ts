export interface IBoxFilters {
  price?: "asc" | "desc";
  popular?: boolean;
  types?: string[] | "all";
  priceRange?: {
    from: number;
    to: number;
  };
  persons?: {
    from: number;
    to: number;
  };
}
