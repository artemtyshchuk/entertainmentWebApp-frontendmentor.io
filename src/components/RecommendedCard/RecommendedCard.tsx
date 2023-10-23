import { CardsType } from "types";
import styles from "./RecommendedCard.module.scss";
import { ReactComponent as TVSeriesIcon } from "assets/icon-nav-tv-series.svg";
import { ReactComponent as MovieIcon } from "assets/icon-nav-movies.svg";
import { useState } from "react";
import { HoverRecommendedCard } from "components/HoverCard";
import { BookmarkButtonRecCard } from "components/BookmarkButton";

export const RecommendedCard = (props: CardsType) => {
  const { bookmarked, category, rating, title, year, regular } = props;

  const [hoverRecommended, setHoverRecommended] = useState(false);

  const handleMouseOver = () => {
    setHoverRecommended(true);
  };

  const handleMouseOut = () => {
    setHoverRecommended(false);
  };

  return (
    <div className={styles.recommendedCard}>
      <div className={styles.recommendedCardWrapper}>
        <div
          className={styles.recommendedCardHover}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {regular && (
            <img
              className={styles.recommendedCardImage}
              src={regular.large}
              alt={title}
            />
          )}
          <HoverRecommendedCard
            hoverRecommended={hoverRecommended}
            hover={false}
          />
        </div>

        <div className={styles.recommendedCardInfoWrapper}>
          <div className={styles.recommendedCardExtraInfo}>
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
          <div className={styles.recommendedCardInfoTitle}>
            <p className={styles.title}>{title}</p>
          </div>
        </div>
        {bookmarked ? <BookmarkButtonRecCard /> : <BookmarkButtonRecCard />}
      </div>
    </div>
  );
};
