import { useQuery } from "@tanstack/react-query";
import attractionService from "../../services/attraction-service";
import carousalService from "../../services/carousal-service";
import categoryService from "../../services/category-service";
import entityService from "../../services/entity-service";

export const getCarousalQuery = () => {
  const { data } = useQuery({
    queryKey: ["calousal"],
    queryFn: () => carousalService.getAllCarousal(),
  });
  return { data };
};

export const getAttractionQuery = () => {
  const { data } = useQuery({
    queryKey: ["attraction"],
    queryFn: () => attractionService.getAllAttraction(),
  });

  return { data };
};

export const getSiteBySlugName = (slug_name: string) => {
  const { data } = useQuery({
    queryKey: ["slug_name", slug_name],
    queryFn: () => attractionService.getSiteAttractionBySlugName(slug_name),
  });
  return { data };
};

export const getCategoryQuery = () => {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: () => categoryService.getAllCategory(),
  });
  return { data };
};

export const getPopularQuery = () => {
  const { data } = useQuery({
    queryKey: ["popular"],
    queryFn: () => attractionService.getPopularAttraction(),
  });
  return { data };
};

export const getSlideImages = () => {
  const { data } = useQuery({
    queryKey: ["slides"],
    queryFn: () => carousalService.getAllCarousal(),
  });
  return { data };
};

export const getSiteAttractionByEntityQuery = (entity: string) => {
  const { data } = useQuery({
    queryKey: ["slides", entity],
    queryFn: () => attractionService.getSiteAttractionByEntity(entity),
  });
  return { data };
};

export const getEntityQuery = () => {
  const { data } = useQuery({
    queryKey: ["entity"],
    queryFn: () => entityService.getAllEntity(),
  });
  return { data };
};
