import { useEffect, useState } from "react";

export const mockLevelDetailResponse = {
  id: 1234,
  title: "1",
  description: "Lorem",
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
