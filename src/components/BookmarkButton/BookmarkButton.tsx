import styles from "./BookmarkButton.module.scss";
import { ReactComponent as BookmarkIconEmpty } from "assets/bookmark_icon_128931.svg";

export const BookmarkButton = () => {
  return (
    <button className={styles.bookmarkButton}>
      <BookmarkIconEmpty className={styles.bookmarkIcon} />
    </button>
  );
};

export const BookmarkButtonRecCard = () => {
  return (
    <button className={styles.bookmarkButtonRecCard}>
      <BookmarkIconEmpty className={styles.bookmarkIcon} />
    </button>
  );
};
