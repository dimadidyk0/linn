import { useQuery } from "@tanstack/react-query";

export const useFetchLessosns = () => {
  const query = useQuery({
    queryKey: ["lessons"],
    queryFn: () =>
      fetch(`http://localhost:3004/lessons`).then((r) => r.json()),
  });

  return query;
};
