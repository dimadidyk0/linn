import { useEffect, useState } from "react";

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
        title: "1",
        description: "Lorem",
      },
      {
        id: 1236,
        title: "1",
        description: "Lorem",
      },
      {
        id: 1237,
        title: "1",
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
        title: "1",
        description: "Lorem",
      },
      {
        id: 1236,
        title: "1",
        description: "Lorem",
      },
      {
        id: 1237,
        title: "1",
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
        title: "1",
        description: "Lorem",
      },
      {
        id: 1236,
        title: "1",
        description: "Lorem",
      },
      {
        id: 1237,
        title: "1",
        description: "Lorem",
      },
    ],
  },
];

export const useFetchLevels = () => {
  const [levels, setLevels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setLevels(mockLevelsResponse);
      setIsLoading(false);
    }, 1000);
  }, []);

  return {
    isLoading,
    data: levels,
  };
};
