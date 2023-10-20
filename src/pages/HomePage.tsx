import { Search } from "components/Search";
import { TrendingCardsList } from "components/TrendingCardsList";
import { useCallback, useEffect, useState } from "react";
import { DataType } from "types";
import { modifyData } from "utils/data";

interface HomePageProps {
  data: DataType[];
}

export const HomePage = ({ data }: HomePageProps) => {
  const [shows, setShows] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const result = await modifyData(data);
    console.log(result);
    setShows(result);
    setIsLoading(false);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Search placeholder={"Search for movies or TV series"} />
      <p className="trendingTitle">Trending</p>
      {isLoading ? "Loading" : <TrendingCardsList cards={shows} />}
      <p className="recommendationTitle">Recommended for you</p>
    </div>
  );
};
