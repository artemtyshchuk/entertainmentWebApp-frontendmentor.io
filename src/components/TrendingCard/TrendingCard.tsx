import { NotificationType, TrendingCardsType } from "types";
import styles from "./TrendingCard.module.scss";
import { ReactComponent as TVSeriesIcon } from "assets/icon-nav-tv-series.svg";
import { ReactComponent as MovieIcon } from "assets/icon-nav-movies.svg";
import { BookmarkButton } from "components/BookmarkButton";
import { HoverCard } from "components/HoverCard";
import { useState } from "react";
import { useBookmark } from "hooks/useBookmark";
import { TrendingBookmarkSpinner } from "components/BookmarkSpinner";
import { useNotification } from "hooks/useNotification";
import { Notification } from "components/Notification";

export const TrendingCard = (props: TrendingCardsType) => {
  const { category, rating, trending, title, year, bookmarked } = props;
  const { handleNotification, notification } = useNotification();
  const { isBookmarked, isBookmarking, handleBookmark } = useBookmark({
    title,
    bookmarked,
    handleNotification,
  });

  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const handlePlayButton = (notification: NotificationType) => {
    handleNotification(notification);
  };

  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div
          className={styles.trendingCardHover}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {trending && (
            <img
              className={styles.trendingCardImage}
              src={trending.large}
              alt={title}
            />
          )}
          <HoverCard
            hoverRecommended={false}
            hover={hover}
            handlePlayButton={handlePlayButton}
          />
        </div>

        <div className={styles.trendingCardInfoWrapper}>
          <div className={styles.trendingCardExtraInfo}>
            <p className={styles.year}>{year}</p>
            <p className={styles.dot}>•</p>
            {category === "Movie" ? (
              <MovieIcon className={styles.icon} />
            ) : (
              <TVSeriesIcon className={styles.icon} />
            )}
            <p className={styles.category}>{category}</p>
            <p className={styles.dot}>•</p>
            <p className={styles.rating}>{rating}</p>
          </div>
          <div className={styles.trendingCardInfoTitle}>
            <p className={styles.title}>{title}</p>
          </div>
        </div>
        {isBookmarking ? (
          <TrendingBookmarkSpinner />
        ) : (
          <BookmarkButton
            isBookmarked={isBookmarked}
            onClick={handleBookmark}
          />
        )}
        {notification.active && (
          <Notification
            status={notification.status}
            message={notification.message}
          />
        )}
      </div>
    </div>
  );
};
