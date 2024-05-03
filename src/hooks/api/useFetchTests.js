import { useQuery, useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../constants/api";
import { queryClient } from "../..";

export const useFetchTests = () => {
  const query = useQuery({
    queryKey: ["tests"],
    queryFn: () => fetch(API_ENDPOINTS.TESTS).then((r) => r.json()),
  });

  return query;
};

export const useCreateTestMutaion = ({ onSuccess }) => {
  return useMutation({
    mutationFn: (test) => {
      return fetch(API_ENDPOINTS.TESTS, {
        method: "POST",
        body: JSON.stringify(test),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tests"] });
      if (onSuccess) {
        onSuccess();
      }
    },
  });
};
