import { useState } from "react";

export const useSearch = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [filteredResults, setFilteredResults] = useState("");

  const filterResults = (result: string) => {
    if (result.trim() === "") {
      setIsSearching(false);
    } else {
      setFilteredResults(result);
      setIsSearching(true);
    }
  };

  return { isSearching, filteredResults, filterResults };
};
