import { MoviesList } from "components/MoviesList";
import { Search } from "components/Search";
import { SearchResult } from "components/SearchResult";
import { useSearch } from "hooks/useSearch";
import { useCallback, useEffect, useState } from "react";
import { DataType } from "types";
import { moviesListData } from "utils/data";

interface MoviesPageProps {
  moviesData: DataType[];
}

export const MoviesPage = ({ moviesData }: MoviesPageProps) => {
  const [moviesList, setMoviesList] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { filterResults, filteredResults, isSearching } = useSearch();

  const fetchData = useCallback(async () => {
    const moviesListResult = await moviesListData(moviesData);
    setMoviesList(moviesListResult);
    setIsLoading(false);
  }, [moviesData]);

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
