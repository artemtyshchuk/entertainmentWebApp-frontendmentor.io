import { TrendingCard } from "components/TrendingCard/TrendingCard";
import styles from "./TrendingCardsList.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataType } from "types";
import { motion } from "framer-motion";

interface TrendingCardsListProps {
  cards: DataType[];
}

export const TrendingCardsList = ({ cards }: TrendingCardsListProps) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1325,
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 1.7,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1.4,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1.4,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1.3,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

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
    <motion.ul
      className={styles.trendingCardsList}
      initial="hidden"
      animate="visible"
    >
      <Slider {...settings}>
        {cards.map((data, i) => (
          <motion.li key={data.title} custom={i} variants={listVariants}>
            <TrendingCard
              category={data.category}
              rating={data.rating}
              title={data.title}
              trending={data.thumbnail.trending}
              year={data.year}
              bookmarked={data.isBookmarked ?? false}
            />
          </motion.li>
        ))}
      </Slider>
    </motion.ul>
  );
};
