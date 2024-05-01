import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../constants/api";

export const useFetchLevels = () => {
  const query = useQuery({
    queryKey: ["levels"],
    queryFn: () => fetch(API_ENDPOINTS.LEVELS).then((r) => r.json()),
  });

  return query;
};
