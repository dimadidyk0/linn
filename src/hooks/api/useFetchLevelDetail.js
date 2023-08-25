import { useEffect, useState } from "react";
import { LESSON_TYPE } from "../../constants/lessonType";

export const mockLevelDetailResponse = {
  id: 1234,
  title: "1",
  description: "Lorem",
  lessonGroups: [
    {
      id: 12421,
      title: "Theory",
      type: LESSON_TYPE.THEORY,
      lessons: [1, 2, 3],
    },
    {
      id: 124212,
      title: "Real-life examples",
      type: LESSON_TYPE.EXAMPLE,
      lessons: [21, 22, 23],
    },
    {
      id: 124213,
      title: "Practive",
      type: LESSON_TYPE.PRACTIVE,
      lessons: [31, 32, 33],
    },
  ],
};

export const useFetchLevelDetail = (id) => {
  // id will used in future
  const [levelDtail, setLevelDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setLevelDetail(mockLevelDetailResponse);
      setIsLoading(false);
    }, 1000);
  }, []);

  return {
    isLoading,
    data: levelDtail,
  };
};
