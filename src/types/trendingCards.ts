export type TrendingCardsType = {
  title: string;
  year: number;
  category: string;
  rating: string;
  trending?: {
    small: string;
    large: string;
  };
  bookmarked: boolean;
};
