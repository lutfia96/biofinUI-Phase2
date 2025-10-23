import { CategoryTypeResponse } from "../types/CategoryType";
import { get } from "./http";

const getAllCategory = async () => {
  const { data } = await get<CategoryTypeResponse>("category");
  return data;
};

export default { getAllCategory };
