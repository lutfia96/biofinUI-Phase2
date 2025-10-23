import {
  AttractionByEntityResponse,
  AttractionTypeResponse,
  SiteBySlugNameResponse,
} from "@/types/AttractionType";
import { get } from "./http";

const getAllAttraction = async () => {
  const { data } = await get<AttractionTypeResponse>("sites");
  return data;
};

const getPopularAttraction = async () => {
  const { data } = await get<AttractionTypeResponse>("popular-sites");
  return data;
};

const getSiteAttractionBySlugName = async (slug_name: string) => {
  const { data } = await get<SiteBySlugNameResponse>("site/" + slug_name);
  return data;
};

const getSiteAttractionByEntity = async (entity: string) => {
  const { data } = await get<AttractionByEntityResponse[]>("sites/" + entity);
  return data;
};
export default {
  getAllAttraction,
  getPopularAttraction,
  getSiteAttractionBySlugName,
  getSiteAttractionByEntity,
};
