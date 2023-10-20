import { DataType } from "types";
import styles from "./RecommendedContentList.module.scss";
import { RecommendedCard } from "components/RecommendedCard";

interface RecommendedContentListProps {
  cards: DataType[];
}

export const RecommendedContentList = ({
  cards,
}: RecommendedContentListProps) => {
  return (
    <div className={styles.recommendedContentList}>
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
