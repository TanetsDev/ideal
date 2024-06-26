import { client } from "@/sanity/lib/client";
import { IBoxFilters } from "@/types/filters.types";
import { BannerDTO, BoxDTO, BoxTypes } from "@/types/sanityData.types";
import { NextRequest } from "next/server";

class SanityDataService {
  private sanity = client;
  constructor() {}
  private createQuery = (
    filters: IBoxFilters,
    limit: number = 12,
    page: number = 0
  ) => {
    const start = limit * page;
    const end = start + limit;
    const typesFilter =
      filters.types !== "all"
        ? ` && boxType._ref in *[_type=="boxTypes" && _id in ${filters.types}]`
        : "";

    const priceRangeFilter = filters.priceRange
      ? ` && price > ${filters.priceRange.from} && price < ${filters.priceRange.to}`
      : "";
    const priceOrder = filters.price ? ` | order(price ${filters.price})` : "";

    const personsFilter = filters.persons
      ? `personCount > ${filters.persons.from} && personCount < ${filters.persons.to}`
      : "";

    const query: string = `*[_type == "box" ${typesFilter}${priceRangeFilter}${personsFilter}][${start}...${end}]${priceOrder}{
      _id,
      name,
      title[]{
        _key,
        value
      },
      dishCount,
      personCount,
      weight,
      price,
      "imageUrls": images[].asset->url,
      extraType->{
        title,
        value[]{
          _key,
          value
        }
      },
      dishes[]->{
        title,
        value[]{
          _key,
          value
        }
      }
    }`;

    return query;
  };

  public getBoxes = async (
    req: NextRequest
  ): Promise<{
    boxes: BoxDTO[];
    page: number;
    limit: number;
    totalDocs: number;
  }> => {
    const { searchParams } = new URL(req.url);
    const limit = Number(searchParams.get("limit"));
    const page = Number(searchParams.get("page"));

    const body = await req.json();
    const query = this.createQuery(body, limit, page);
    const boxes = await this.sanity.fetch(query);
    const totalDocs = await this.sanity.fetch(`count(*[_type == "box"])`);
    return { boxes, page, limit, totalDocs };
  };

  public getBanner = async (): Promise<BannerDTO> => {
    const banner = await this.sanity.fetch(`*[_type == "banner"] {
      name,
      title,
      text,
      "imageUrl": image.asset->url
    }`);

    return banner;
  };

  public getInstaGallery = async (): Promise<string[]> => {
    const gallery = await this.sanity.fetch(`*[_type == "insta"] {
      title,
      "imageUrls": images[].asset->url
    }[0]`);

    return gallery.imageUrls;
  };

  public getBoxTypes = async (): Promise<BoxTypes> => {
    const boxTypes = await this.sanity.fetch(
      `*[_type == "boxTypes"]{
      _id,
      value[]{
        _key,
        value
      }
    }`
    );

    return boxTypes;
  };
}

const sanityDataService = new SanityDataService();

export default sanityDataService;
