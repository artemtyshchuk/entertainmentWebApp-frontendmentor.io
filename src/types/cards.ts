export type CardsType = {
  title: string;
  year: number;
  category: string;
  rating: string;
  regular?: {
    small: string;
    medium: string;
    large: string;
  };
  bookmarked: boolean;
};
