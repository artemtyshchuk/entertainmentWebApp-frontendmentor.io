import { TrendingCard } from "components/TrendingCard/TrendingCard";
import styles from "./TrendingCardsList.module.scss";
import Slider from "react-slick";
import { DataType, TrendingCardsType } from "types";

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
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1.46,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.4,
        },
      },
    ],
  };

  return (
    <ul className={styles.trendingCardsList}>
      <Slider {...settings}>
        {cards.map((data) => (
          <li key={data.title}>
            <TrendingCard
              category={data.category}
              rating={data.rating}
              title={data.title}
              trending={data.thumbnail.trending}
              year={data.year}
              bookmarked={data.isBookmarked ?? false}
            />
          </li>
        ))}
      </Slider>
    </ul>
  );
};
