import styles from "./BookmarkButton.module.scss";

interface BookmarkButtonProps {}

export const BookmarkButton = ({}: BookmarkButtonProps) => {
  return (
    <div className={styles.bookmarkButton}>
      <div></div>
    </div>
  );
};
