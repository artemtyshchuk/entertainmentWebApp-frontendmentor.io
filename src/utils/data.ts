import { DataType } from "types";
import { bookmarkUtils } from "./bookmarkUtils";

export const modifyData = async (shows: DataType[]) => {
  const userBookmarkedShows = await bookmarkUtils();

  const res = await fetch("db.json");
  const data = (await res.json()) as DataType[];

  const filteredData = data
    .filter((show) => show.isTrending === true)
    .map((show) => ({ ...show, isBookmarked: true }));

  return filteredData;

  // return data.map((show) => {
  //   if (userBookmarkedShows.includes(show.title)) {
  //     return { ...show, isBookmarked: true };
  //   } else {
  //     return { ...show, isBookmarked: false };
  //   }
  // });
};
