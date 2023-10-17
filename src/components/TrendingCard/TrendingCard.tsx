import { TrendingCardsType } from "types";
import styles from "./TrendingCard.module.scss";
import { ReactComponent as TVSeriesIcon } from "assets/icon-nav-tv-series.svg";
import { ReactComponent as MovieIcon } from "assets/icon-nav-movies.svg";

// interface TrendingCardProps extends TrendingCardsType {}

export const TrendingCard = (props: TrendingCardsType) => {
  const { category, rating, trending, title, year, bookmarked } = props;
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <img
          className={styles.trendingCardImage}
          src={trending?.large ?? ""}
          alt={title}
        />
        <div className={styles.trendingCardInfoWrapper}>
          <div className={styles.trendingCardExtraInfo}>
            <p className={styles.year}>{year}</p>
            {category === "movie" ? <MovieIcon /> : <TVSeriesIcon />}
            <p className={styles.category}>{category}</p>
            <p className={styles.rating}>{rating}</p>
          </div>
          <div className={styles.trendingCardInfoTitle}>
            <p className={styles.title}>{title}</p>
          </div>
          {bookmarked ? "" : ""}
        </div>
      </div>
    </div>
  );
};
