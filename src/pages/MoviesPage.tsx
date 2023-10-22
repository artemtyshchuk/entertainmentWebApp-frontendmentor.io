import { MoviesList } from "components/MoviesList";
import { Search } from "components/Search";
import { SearchResult } from "components/SearchResult";
import { useSearch } from "hooks/useSearch";
import { useCallback, useEffect, useState } from "react";
import { DataType } from "types";
import { moviesListData } from "utils/data";

interface MoviesPageProps {
  data: DataType[];
}

export const MoviesPage = ({ data }: MoviesPageProps) => {
  const [moviesList, setMoviesList] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { filterResults, filteredResults, isSearching } = useSearch();

  const fetchData = useCallback(async () => {
    const moviesListResult = await moviesListData(data);
    setMoviesList(moviesListResult);
    setIsLoading(false);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Search onSearch={filterResults} placeholder={"Search for movies"} />
      {isSearching ? (
        <SearchResult result={filteredResults} />
      ) : (
        <>
          <p className="trendingTitle">Movies</p>
          {isLoading ? "Loading" : <MoviesList cards={moviesList} />}
        </>
      )}
    </div>
  );
};
