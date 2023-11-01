import { useState } from "react";
import { bookmarkUtils } from "utils/bookmarkUtils";

interface useBookmarkProps {
  title: string;
  bookmarked: boolean;
  // handleNotification: (result: NotificationType) => void
}

export const useBookmark = ({ title, bookmarked }: useBookmarkProps) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);
  const [isBookmarking, setIsBookmarking] = useState(false);

  const handleBookmark = async () => {
    // setIsBookmarking(true);
    const userBookmarks = await bookmarkUtils();

    if (!userBookmarks) return;

    const isTitleInBookmarks = userBookmarks.some(
      (item) => item.title === title
    );

    if (isTitleInBookmarks) {
      const result = await bookmarkUtils("POST", title);
      console.log(result);
    } else {
      const result = await bookmarkUtils("DELETE", title);
      console.log(result);
    }

    setIsBookmarked((el) => !el);
    // setIsBookmarking(false);
  };
  return { isBookmarked, isBookmarking, handleBookmark };
};
