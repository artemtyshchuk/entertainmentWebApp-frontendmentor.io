import { useCallback, useEffect, useState } from "react";
import { DataType } from "types";
import { getBookmarked } from "utils/data";
import { useGetBookmark } from "hooks/useGetBookmark";

export const useBookmarkedDataFetcher = (data: DataType[]) => {
  const [shows, setShows] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const bookmarkedData = useGetBookmark();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const modifiedShows = await getBookmarked(data);

      const bookmarkedShows = modifiedShows.filter(
        (show) => bookmarkedData[show.title]
      );

      setShows(bookmarkedShows);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  }, [data, bookmarkedData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (shows.length === 0 && !isLoading && !error) {
      fetchData();
    }
  }, [shows, isLoading, error, fetchData]);

  return { shows, isLoading, error };
};
