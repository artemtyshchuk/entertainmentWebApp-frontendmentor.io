import { MoviesList } from "components/MoviesList";
import { Search } from "components/Search";
import { useCallback, useEffect, useState } from "react";
import { DataType } from "types";
import { moviesListData } from "utils/data";

interface MoviesPageProps {
  data: DataType[];
}

export const MoviesPage = ({ data }: MoviesPageProps) => {
  const [moviesList, setMoviesList] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <Search placeholder={"Search for movies"} />
      <p className="trendingTitle">Movies</p>
      {isLoading ? "Loading" : <MoviesList cards={moviesList} />}
    </div>
  );
};
