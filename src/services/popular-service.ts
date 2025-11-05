import type { PopularTypeResponse } from "../types/PopularType";
import { get } from "./http";

const getAllPopular = async () => {
  const { data } = await get<PopularTypeResponse>("popular");
  return data;
};

export default { getAllPopular };
