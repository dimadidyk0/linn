import { useQuery } from "@tanstack/react-query";

export const useFetchLevelDetail = (id) => {
  const query = useQuery({
    queryKey: ["levels"],
    queryFn: () =>
      fetch("http://localhost:3004/levels/" + id).then((r) =>
        r.json()
      ),
  });

  return query;
};
