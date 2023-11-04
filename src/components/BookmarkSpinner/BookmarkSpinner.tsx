import styles from "./BookmarkSpinner.module.scss";
import { ReactComponent as Spinner } from "assets/Spinner-1s-32px.svg";

export const BookmarkSpinner = () => {
  return (
    <div className={styles.bookmarkSpinner}>
      <Spinner />
    </div>
  );
};

export const TrendingBookmarkSpinner = () => {
  return (
    <div className={styles.trendingBookmarkSpinner}>
      <Spinner />
    </div>
  );
};
