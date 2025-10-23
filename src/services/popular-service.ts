import { get } from "./http";
import { PopularTypeResponse } from "../types/PopularType";

const getAllPopular = async () => {
  const { data } = await get<PopularTypeResponse>("popular");
  return data;
};

export default { getAllPopular };
