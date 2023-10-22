import { useEffect, useState } from "react";
import styles from "./SearchResult.module.scss";
import { DataType } from "types";
import { getBookmarkedShows, getfilteredData, modifyData } from "utils/data";
import { RecommendedContentList } from "components/RecommendedContentList";

interface SearchResultProps {
  result: string;
  bookmarks?: boolean;
}

export const SearchResult = ({ result, bookmarks }: SearchResultProps) => {
  const [show, setShow] = useState<DataType[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const resultNumber = show.length;
  let resultText = "";

  useEffect(() => {
    const fetchData = async () => {
      setIsSearching(true);
      const data = getfilteredData(result);
      const searchResult = await modifyData(await data);

      if (bookmarks) {
        const bookmarkedResult = await getBookmarkedShows(searchResult);
        setShow(bookmarkedResult);
      } else {
        setShow(searchResult);
      }

      setIsSearching(false);
    };
    fetchData();
  }, [result, bookmarks]);

  if (resultNumber === 0) {
    resultText = "No results found";
  } else if (resultNumber === 1) {
    resultText = `Found 1 result for '${result}'`;
  } else {
    resultText = `Found ${resultNumber} results for '${result}'`;
  }

  return (
    <div className={styles.searchResult}>
      {isSearching ? "Loading" : <SearchTitle content={resultText} />}
      <div className={styles.searchResultWrapper}>
        {isSearching ? (
          "Loading..."
        ) : (
          <>
            <RecommendedContentList cards={show} />
          </>
        )}
      </div>
    </div>
  );
};

const SearchTitle = (props: { content: string }) => {
  return <p className={styles.searchTitle}>{props.content}</p>;
};
