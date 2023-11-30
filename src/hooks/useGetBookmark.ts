import { useState, useEffect } from "react";

export const useGetBookmark = () => {
  const [bookmarkedData, setBookmarkedData] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const storedDataString = localStorage.getItem("bookmarkedData");
    if (storedDataString) {
      const storedData = JSON.parse(storedDataString);
      setBookmarkedData(storedData);
    }
  }, []);

  return bookmarkedData;
};
