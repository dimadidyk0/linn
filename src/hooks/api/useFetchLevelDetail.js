import { useEffect, useState } from "react";
import { LESSON_TYPE } from "../../constants/lessonType";

export const mockLevelDetailResponse = {
  id: 1234,
  title: "1",
  description: "Radicals and kanji",
  lessonGroups: [
    {
      id: 12421,
      title: "Radicals",
      type: LESSON_TYPE.CHARACTER,
      lessons: [
        { character: "亅", meaning: "Barb" },
        { character: "大", meaning: "Big" },
        { character: "工", meaning: "Construction" },
        { character: "十", meaning: "Cross" },
        { character: "丶", meaning: "Drop" },
        { character: "入", meaning: "Enter" },
        { character: "ハ", meaning: "Fins" },
        { character: "一", meaning: "Ground" },
        { character: "亠", meaning: "Lid" },
      ],
    },
    {
      id: 124212,
      title: "Kanji",
      type: LESSON_TYPE.THEORY,
      lessons: [21, 22, 23],
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
