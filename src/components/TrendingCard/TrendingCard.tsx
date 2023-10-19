import { TrendingCardsType } from "types";
import styles from "./TrendingCard.module.scss";
import { ReactComponent as TVSeriesIcon } from "assets/icon-nav-tv-series.svg";
import { ReactComponent as MovieIcon } from "assets/icon-nav-movies.svg";
import { BookmarkButton } from "components/BookmarkButton";
import { HoverCard } from "components/HoverCard";
import { useState } from "react";

// interface TrendingCardProps extends TrendingCardsType {}

export const TrendingCard = (props: TrendingCardsType) => {
  const { category, rating, trending, title, year, bookmarked } = props;

  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div className={styles.trendingCard}>
      <div
        className={styles.trendingCardWrapper}
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
        <HoverCard hover={hover} />
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
        {bookmarked ? <BookmarkButton /> : <BookmarkButton />}
      </div>
    </div>
  );
};
