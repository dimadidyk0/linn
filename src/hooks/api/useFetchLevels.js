import { useQuery } from "@tanstack/react-query";

export const useFetchLevels = () => {
  const query = useQuery({
    queryKey: ["levels"],
    queryFn: () =>
      fetch("http://localhost:3004/levels").then((r) => r.json()),
  });

  return query;
};
