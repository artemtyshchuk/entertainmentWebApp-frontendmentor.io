import { DataType } from "types";
import { bookmarkUtils } from "./bookmarkUtils";

export const modifyData = async (shows: DataType[]) => {
  const user = await bookmarkUtils();

  const modifiedShows = shows.map((show) => {
    const isBookmarked = user.some(
      (bookmarkedShow) => bookmarkedShow.title === show.title
    );
    return { ...show, isBookmarked };
  });

  return modifiedShows;
};

export const getTrending = async (shows: DataType[]) => {
  const res = await fetch("db.json");
  const data = (await res.json()) as DataType[];

  const filteredData = data
    .filter((show) => show.isTrending === true)
    .map((show) => ({
      ...show,
      isBookmarked: show.isBookmarked === true ? true : false,
    }));

  return filteredData;
};

export const RecommendedContentData = async (shows: DataType[]) => {
  const res = await fetch("db.json");
  const data = (await res.json()) as DataType[];

  const filteredData = data
    .filter((show) => show.isTrending === false)
    .map((show) => ({ ...show, isBookmarked: false }));

  return filteredData;
};

export const moviesListData = async (shows: DataType[]) => {
  const res = await fetch("db.json");
  const data = (await res.json()) as DataType[];

  const filteredData = data
    .filter((show) => show.category === "Movie")
    .map((show) => ({ ...show, isBookmarked: false }));

  return filteredData;
};

export const tvSerieListData = async (shows: DataType[]) => {
  const res = await fetch("db.json");
  const data = (await res.json()) as DataType[];

  const filteredData = data
    .filter((show) => show.category === "TV Series")
    .map((show) => ({ ...show, isBookmarked: false }));

  return filteredData;
};

export const getMovies = async () => {
  const res = await fetch("db.json");
  const data = (await res.json()) as DataType[];
  return data.filter((el) => el.category === "Movie");
};

export const getTvSeries = async () => {
  const res = await fetch("db.json");
  const data = (await res.json()) as DataType[];
  return data.filter((el) => el.category === "TV Series");
};

export const getBookmarkedShows = async (data: DataType[]) => {
  const bookmarkedShows = await modifyData(data);
  return bookmarkedShows.filter((el) => el.isBookmarked === false);
};

export const getfilteredData = async (result: string) => {
  const res = await fetch("db.json");
  const data = (await res.json()) as DataType[];

  if (window.location.pathname === "/movies") {
    return (await getMovies()).filter((el) =>
      el.title.toLowerCase().includes(result.toLowerCase())
    );
  } else if (window.location.pathname === "/tv-series") {
    return (await getTvSeries()).filter((el) =>
      el.title.toLowerCase().includes(result.toLowerCase())
    );
  } else {
    return data.filter((el) =>
      el.title.toLowerCase().includes(result.toLowerCase())
    );
  }
};
