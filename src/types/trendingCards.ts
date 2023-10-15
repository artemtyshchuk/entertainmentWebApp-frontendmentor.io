export type TrendingCardsType = {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
};
