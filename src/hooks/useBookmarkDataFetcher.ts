import { useCallback, useEffect, useState } from "react";
import { DataType } from "types";
import { getBookmarked } from "utils/data";
import { useGetBookmark } from "hooks/useGetBookmark";

export const useBookmarkedDataFetcher = (data: DataType[]) => {
  const [shows, setShows] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const bookmarkedData = useGetBookmark();

  const fetchData = useCallback(async () => {
    const modifiedShows = await getBookmarked(data);

    const bookmarkedShows = modifiedShows.filter(
      (show) => bookmarkedData[show.title]
    );

    setShows(bookmarkedShows);
    setIsLoading(false);
  }, [data, bookmarkedData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { shows, isLoading };
};
