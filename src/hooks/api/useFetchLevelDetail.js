import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../constants/api";

export const useFetchLevelDetail = (id) => {
  const query = useQuery({
    queryKey: ["level", id],
    queryFn: () =>
      fetch(`${API_ENDPOINTS.LEVELS}/${id}`).then((r) => r.json()),
  });

  return query;
};
