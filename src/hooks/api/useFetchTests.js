import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../constants/api";

export const useFetchTests = () => {
  const query = useQuery({
    queryKey: ["tests"],
    queryFn: () => fetch(API_ENDPOINTS.TESTS).then((r) => r.json()),
  });

  return query;
};

export const createTest = (test) => {
  return fetch(API_ENDPOINTS.TESTS, {
    method: "POST",
    body: JSON.stringify(test),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
