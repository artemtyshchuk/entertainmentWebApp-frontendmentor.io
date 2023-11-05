import { DataType } from "types";
import styles from "./RecommendedContentList.module.scss";
import { RecommendedCard } from "components/RecommendedCard";
import { motion } from "framer-motion";

interface RecommendedContentListProps {
  cards: DataType[];
}

export const RecommendedContentList = ({
  cards,
}: RecommendedContentListProps) => {
  const listVariants = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.1,
      },
    }),
  };
  return (
    <motion.div
      className={styles.recommendedContentList}
      initial="hidden"
      animate="visible"
    >
      {cards.map((data, i) => (
        <motion.div key={data.title} custom={i} variants={listVariants}>
          <RecommendedCard
            category={data.category}
            rating={data.rating}
            title={data.title}
            regular={data.thumbnail.regular}
            year={data.year}
            bookmarked={data.isBookmarked ?? false}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
