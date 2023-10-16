import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";

interface SearchProps {
  placeholder: string;
}

export const Search = ({ placeholder }: SearchProps) => {
  return (
    <div className={styles.search}>
      <SearchIcon className={styles.searchIcon} />
      <input className={styles.input} type="search" placeholder={placeholder} />
    </div>
  );
};
