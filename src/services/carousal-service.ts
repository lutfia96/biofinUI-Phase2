import { CarousalTypeResponse } from "../types/CarousalType";
import { get } from "./http";

const getAllCarousal = async () => {
  const { data } = await get<CarousalTypeResponse[]>("slides");
  return data;
};

export default { getAllCarousal };
