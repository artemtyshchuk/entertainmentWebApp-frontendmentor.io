import { useEffect, useRef, useState } from "react";
import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";

interface SearchProps {
  placeholder: string;
  onSearch: (filterResults: string) => void;
}

export const Search = ({ placeholder, onSearch }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchedTitle, setSearchedTitle] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearch(searchedTitle);
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchedTitle, onSearch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      const title = event.target.value;
      setSearchedTitle(title);
    }
  };

  return (
    <div className={styles.search}>
      <SearchIcon className={styles.searchIcon} />
      <input
        className={styles.input}
        type="search"
        placeholder={placeholder}
        ref={inputRef}
        onChange={handleSearch}
      />
    </div>
  );
};
