import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../constants/api";

export const useFetchReviews = () => {
  const query = useQuery({
    queryKey: ["reviews"],
    queryFn: () => fetch(API_ENDPOINTS.REVIEWS).then((r) => r.json()),
  });

  return query;
};
