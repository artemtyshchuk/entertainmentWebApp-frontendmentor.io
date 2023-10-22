import { Search } from "components/Search";
import { SearchResult } from "components/SearchResult";
import { TvSeriesList } from "components/TVSeriesList";
import { useSearch } from "hooks/useSearch";
import { useCallback, useEffect, useState } from "react";
import { DataType } from "types";
import { tvSerieListData } from "utils/data";

interface TVSeriesPageProps {
  data: DataType[];
}

export const TVSeriesPage = ({ data }: TVSeriesPageProps) => {
  const [tvSeriesList, setTvSeriesList] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { filterResults, filteredResults, isSearching } = useSearch();

  const fetchData = useCallback(async () => {
    const tvSeriesListResult = await tvSerieListData(data);
    setTvSeriesList(tvSeriesListResult);
    setIsLoading(false);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Search onSearch={filterResults} placeholder={"Search for TV series"} />
      {isSearching ? (
        <SearchResult result={filteredResults} />
      ) : (
        <>
          <p className="trendingTitle">TV Series</p>
          {isLoading ? "Loading" : <TvSeriesList cards={tvSeriesList} />}
        </>
      )}
    </div>
  );
};
