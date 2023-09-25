import { useQuery } from "@tanstack/react-query";

export const useFetchTests = () => {
  const query = useQuery({
    queryKey: ["tests"],
    queryFn: () =>
      fetch(`http://localhost:3004/tests`).then((r) => r.json()),
  });

  return query;
};
