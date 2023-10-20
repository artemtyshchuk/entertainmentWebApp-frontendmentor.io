import { DataType } from "types";
import styles from "./TVSeriesList.module.scss";
import { RecommendedCard } from "components/RecommendedCard";

interface TvSeriesListProps {
  cards: DataType[];
}

export const TvSeriesList = ({ cards }: TvSeriesListProps) => {
  return (
    <div className={styles.tvSeriesList}>
      {cards.map((data) => (
        <div key={data.title}>
          <RecommendedCard
            category={data.category}
            rating={data.rating}
            title={data.title}
            regular={data.thumbnail.regular}
            year={data.year}
            bookmarked={data.isBookmarked ?? false}
          />
        </div>
      ))}
    </div>
  );
};
