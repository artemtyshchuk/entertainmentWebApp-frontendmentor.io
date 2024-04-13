import { RecommendedContentList } from "components/RecommendedContentList";
import { Search } from "components/Search";
import { SearchResult } from "components/SearchResult";
import { TrendingCardsList } from "components/TrendingCardsList";
import { useCallback, useEffect, useState } from "react";
import { DataType } from "types";
import { RecommendedContentData, getTrending } from "utils/data";
import { useSearch } from "hooks/useSearch";

interface HomePageProps {
  data: DataType[];
  onSearch: (filterResults: string) => void;
}

export const HomePage = ({ data, onSearch }: HomePageProps) => {
  const [shows, setShows] = useState<DataType[]>([]);
  const [recContentList, setRecContentList] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { filterResults, filteredResults, isSearching } = useSearch();

  const fetchData = useCallback(async () => {
    const result = await getTrending(data);
    const recContentListResult = await RecommendedContentData(data);
    setShows(result);
    setRecContentList(recContentListResult);
    setIsLoading(false);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Search
        onSearch={filterResults}
        placeholder={"Search for movies or TV series"}
      />

      {isSearching ? (
        <SearchResult result={filteredResults} />
      ) : (
        <>
          <p className="trendingTitle">Trending</p>
          {isLoading ? "Loading" : <TrendingCardsList cards={shows} />}
          <p className="recommendationTitle">Recommended for you</p>
          {isLoading ? (
            "Loading"
          ) : (
            <RecommendedContentList cards={recContentList} />
          )}
        </>
      )}
    </div>
  );
};
