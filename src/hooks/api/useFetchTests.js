import { useQuery } from "@tanstack/react-query";

export const useFetchTests = () => {
  const query = useQuery({
    queryKey: ["tests"],
    queryFn: () =>
      fetch(`http://localhost:3004/tests`).then((r) => r.json()),
  });

  return query;
};

export const createTest = (test) => {
  return fetch(`http://localhost:3004/tests`, {
    method: "POST",
    body: JSON.stringify(test),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
