import { EntityTypeResponse } from "@/types/EntityType";
import { get } from "./http";

const getAllEntity = async () => {
  const { data } = await get<EntityTypeResponse[]>("entities");
  return data;
};

export default { getAllEntity };
