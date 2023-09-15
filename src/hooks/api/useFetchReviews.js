import { useQuery } from "@tanstack/react-query";

export const useFetchReviews = () => {
  const query = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      fetch(`http://localhost:3004/reviews`).then((r) => r.json()),
  });

  return query;
};
