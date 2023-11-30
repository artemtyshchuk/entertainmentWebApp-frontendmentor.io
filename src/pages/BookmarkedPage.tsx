import { MoviesList } from "components/MoviesList";
import { Search } from "components/Search";
import { SearchResult } from "components/SearchResult";
import { useBookmarkedDataFetcher } from "hooks/useBookmarkDataFetcher";
import { useSearch } from "hooks/useSearch";
import { DataType } from "types";

interface BookmarkedPageProps {
  tvSeriesData: DataType[];
  moviesData: DataType[];
}

export const BookmarkedPage = ({ moviesData }: BookmarkedPageProps) => {
  const { filterResults, filteredResults, isSearching } = useSearch();
  const { shows: bookmarkedMovies, isLoading: isBookmarkedMoviesLoading } =
    useBookmarkedDataFetcher(moviesData);

  const showsHandler = (shows: DataType[]) => {
    if (shows.length === 0) {
      return (
        <p className="trendingTitle">
          You don't have any bookmarked movies or TV series
        </p>
      );
    } else {
      return <MoviesList cards={shows} />;
    }
  };

  return (
    <div>
      <Search
        onSearch={filterResults}
        placeholder={"Search for bookmarked shows"}
      />
      {isSearching ? (
        <SearchResult result={filteredResults} bookmarks={true} />
      ) : (
        <>
          <p className="trendingTitle">Bookmarkes</p>
          {isBookmarkedMoviesLoading
            ? "Loading"
            : showsHandler(bookmarkedMovies)}
        </>
      )}
    </div>
  );
};
