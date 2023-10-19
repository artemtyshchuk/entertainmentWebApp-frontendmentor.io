import styles from "./BookmarkButton.module.scss";
import { ReactComponent as BookmarkIconEmpty } from "assets/bookmark_icon_128931.svg";
import { ReactComponent as BookmarkIconFull } from "assets/icon-bookmark-full.svg";

interface BookmarkButtonProps {}

export const BookmarkButton = ({}: BookmarkButtonProps) => {
  return (
    <button className={styles.bookmarkButton}>
      <BookmarkIconEmpty className={styles.bookmarkIcon} />
    </button>
  );
};
