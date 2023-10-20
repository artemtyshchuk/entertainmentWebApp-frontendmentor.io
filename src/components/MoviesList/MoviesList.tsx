import { DataType } from "types";
import styles from "./MoviesList.module.scss";
import { RecommendedCard } from "components/RecommendedCard";

interface MoviesListProps {
  cards: DataType[];
}

export const MoviesList = ({ cards }: MoviesListProps) => {
  return (
    <div className={styles.moviesList}>
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
