import { useEffect, useState } from "react";
import { LESSON_TYPE } from "../../constants/lessonType";

export const mockLevelDetailResponse = {
  id: 1234,
  title: "1",
  titleSubtext: "Radicals and kanji",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        { character: "亅", meaning: "Barb" },
        { character: "大", meaning: "Big" },
        { character: "工", meaning: "Construction" },
        { character: "十", meaning: "Cross" },
        { character: "丶", meaning: "Drop" },
        { character: "入", meaning: "Enter" },
        { character: "ハ", meaning: "Fins" },
        { character: "一", meaning: "Ground" },
        { character: "亠", meaning: "Lid" },
        { character: "亅", meaning: "Barb" },
        { character: "大", meaning: "Big" },
        { character: "工", meaning: "Construction" },
        { character: "十", meaning: "Cross" },
        { character: "丶", meaning: "Drop" },
        { character: "入", meaning: "Enter" },
        { character: "ハ", meaning: "Fins" },
        { character: "一", meaning: "Ground" },
        { character: "亠", meaning: "Lid" },
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
