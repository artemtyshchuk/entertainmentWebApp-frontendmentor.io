import { useState, useEffect } from "react";
import { NotificationType } from "types";
import { bookmarkUtils } from "utils/bookmarkUtils";

interface useBookmarkProps {
  title: string;
  bookmarked: boolean;
  handleNotification: (result: NotificationType) => void;
}

export const useBookmark = ({
  title,
  bookmarked,
  handleNotification,
}: useBookmarkProps) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);
  const [isBookmarking, setIsBookmarking] = useState(false);

  useEffect(() => {
    const storedDataString = localStorage.getItem("bookmarkedData");
    if (storedDataString) {
      const storedData = JSON.parse(storedDataString) || {};
      if (storedData[title] !== undefined) {
        setIsBookmarked(storedData[title]);
      }
    }
  }, [title]);

  const handleBookmark = async () => {
    setIsBookmarking(true);
    const userBookmarks = await bookmarkUtils();

    if (!userBookmarks) return;

    const storedDataString = localStorage.getItem("bookmarkedData");
    const updatedBookmarks = storedDataString
      ? JSON.parse(storedDataString)
      : {};
    updatedBookmarks[title] = !isBookmarked;
    localStorage.setItem("bookmarkedData", JSON.stringify(updatedBookmarks));

    setTimeout(() => {
      if (isBookmarked) {
        handleNotification({
          message: "Removed from bookmarks",
          status: "error",
        });
      } else {
        handleNotification({
          message: "Added to bookmarks",
          status: "success",
        });
      }
    }, 1800);

    setTimeout(() => {
      setIsBookmarking(false);
      setIsBookmarked((el) => !el);
    }, 2000);
  };

  return { isBookmarked, isBookmarking, handleBookmark };
};
