import { useState } from "react";
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

  const handleBookmark = async () => {
    setIsBookmarking(true);
    const userBookmarks = await bookmarkUtils();

    if (!userBookmarks) return;

    const isTitleInBookmarks = userBookmarks.some(
      (item) => item.title === title
    );

    if (isTitleInBookmarks) {
      // setTimeout(() => {
      //   handleNotification({
      //     message: "Added to bookmarks",
      //     status: "success",
      //   });
      // }, 1800);
    } else {
    }

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
      console.log(setIsBookmarked((el) => !el));
    }, 2000);
  };
  return { isBookmarked, isBookmarking, handleBookmark };
};
