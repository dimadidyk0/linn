import { useQuery } from "@tanstack/react-query";

export const mockLevelsResponse = [
  {
    id: 1,
    title: "Beginner",
    color: "yellow",
    number: 1,
    sublevels: [
      {
        id: 1234,
        title: "1",
        description: "Lorem",
      },
      {
        id: 1235,
        title: "2",
        description: "Lorem",
      },
      {
        id: 1236,
        title: "3",
        description: "Lorem",
      },
      {
        id: 1237,
        title: "4",
        description: "Lorem",
      },
    ],
  },
  {
    id: 2,
    title: "Inermediate",
    color: "orange",
    sublevels: [
      {
        id: 1234,
        title: "1",
        description: "Lorem",
      },
      {
        id: 1235,
        title: "2",
        description: "Lorem",
      },
      {
        id: 1236,
        title: "3",
        description: "Lorem",
      },
      {
        id: 1237,
        title: "4",
        description: "Lorem",
      },
    ],
  },
  {
    id: 3,
    title: "Advanced",
    color: "red",
    sublevels: [
      {
        id: 1234,
        title: "1",
        description: "Lorem",
      },
      {
        id: 1235,
        title: "2",
        description: "Lorem",
      },
      {
        id: 1236,
        title: "3",
        description: "Lorem",
      },
      {
        id: 1237,
        title: "4",
        description: "Lorem",
      },
    ],
  },
];

export const useFetchLevels = () => {
  const query = useQuery({
    queryKey: ["levels"],
    queryFn: () =>
      fetch("http://localhost:3004/levels").then((r) => r.json()),
  });

  return query;
};
