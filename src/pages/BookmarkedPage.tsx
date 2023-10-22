import { Search } from "components/Search";
import { useSearch } from "hooks/useSearch";

export const BookmarkedPage = () => {
  const { filterResults, filteredResults, isSearching } = useSearch();

  return (
    <div>
      <Search
        onSearch={filterResults}
        placeholder={"Search for bookmarked shows"}
      />
    </div>
  );
};
