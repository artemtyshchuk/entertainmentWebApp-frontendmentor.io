import { Search } from "components/Search";
import { useBookmarkedDataFetcher } from "hooks/useBookmarkDataFetcher";
import { useSearch } from "hooks/useSearch";
import { DataType } from "types";

interface BookmarkedPageProps {
  tvSeriesData: DataType[];
  moviesData: DataType[];
}

export const BookmarkedPage = ({
  tvSeriesData,
  moviesData,
}: BookmarkedPageProps) => {
  const { filterResults, filteredResults, isSearching } = useSearch();
  const { shows: bookmarkedMovies, isLoading: isBookmarkedMoviesLoading } =
    useBookmarkedDataFetcher(moviesData);
  const { shows: bookmarkedTvSeries, isLoading: isBookmarkedTvSeriesLoading } =
    useBookmarkedDataFetcher(tvSeriesData);

  return (
    <div>
      <Search
        onSearch={filterResults}
        placeholder={"Search for bookmarked shows"}
      />
    </div>
  );
};
