import { useQuery } from "@tanstack/react-query";
import attractionService from "../../services/attraction-service";
import carousalService from "../../services/carousal-service";
import categoryService from "../../services/category-service";
import entityService from "../../services/entity-service";

export const getCarousalQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["calousal"],
    queryFn: () => carousalService.getAllCarousal(),
  });
  return { data, isFetching };
};

export const getAttractionQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["attraction"],
    queryFn: () => attractionService.getAllAttraction(),
  });

  return { data, isFetching };
};

export const getSiteBySlugName = (slug_name: string) => {
  const { data, isFetching } = useQuery({
    queryKey: ["slug_name", slug_name],
    queryFn: () => attractionService.getSiteAttractionBySlugName(slug_name),
  });
  return { data, isFetching };
};

export const getCategoryQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["category"],
    queryFn: () => categoryService.getAllCategory(),
  });
  return { data, isFetching };
};

export const getPopularQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["popular"],
    queryFn: () => attractionService.getPopularAttraction(),
  });
  return { data, isFetching };
};

export const getSlideImages = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["slides"],
    queryFn: () => carousalService.getAllCarousal(),
  });
  return { data, isFetching };
};

export const getSiteAttractionByEntityQuery = (entity: string) => {
  const { data, isFetching } = useQuery({
    queryKey: ["slides", entity],
    queryFn: () => attractionService.getSiteAttractionByEntity(entity),
  });
  return { data, isFetching };
};

export const getEntityQuery = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["entity"],
    queryFn: () => entityService.getAllEntity(),
  });
  return { data, isFetching };
};
