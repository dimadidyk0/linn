import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../constants/api";

export const useFetchLessosns = () => {
  const query = useQuery({
    queryKey: ["lessons"],
    queryFn: () => fetch(API_ENDPOINTS.LESSONS).then((r) => r.json()),
  });

  return query;
};
