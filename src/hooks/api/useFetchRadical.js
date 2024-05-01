import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../constants/api";

export const useFetchRadicalDetail = (id) => {
  const query = useQuery({
    queryKey: ["radical", id],
    queryFn: () =>
      fetch(`${API_ENDPOINTS.RADICALS}/${id}`).then((r) => r.json()),
  });

  return query;
};
