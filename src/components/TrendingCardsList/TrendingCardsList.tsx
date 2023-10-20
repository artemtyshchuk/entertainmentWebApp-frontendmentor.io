import { TrendingCard } from "components/TrendingCard/TrendingCard";
import styles from "./TrendingCardsList.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataType } from "types";

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
