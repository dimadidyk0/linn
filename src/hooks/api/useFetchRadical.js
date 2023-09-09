import { useQuery } from "@tanstack/react-query";

export const useFetchRadicalDetail = (id) => {
  const query = useQuery({
    queryKey: ["radical", id],
    queryFn: () =>
      fetch(`http://localhost:3004/radicals/${id}`).then((r) =>
        r.json()
      ),
  });

  return query;
};
