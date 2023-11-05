import { DataType } from "types";
import styles from "./MoviesList.module.scss";
import { RecommendedCard } from "components/RecommendedCard";
import { motion } from "framer-motion";

interface MoviesListProps {
  cards: DataType[];
}

export const MoviesList = ({ cards }: MoviesListProps) => {
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
      className={styles.moviesList}
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
