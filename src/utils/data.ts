import { DataType } from "types";
import data from "./db.json";
import { bookmarkUtils } from "./bookmarkUtils";

export const modifyData = async (shows: DataType[] = data) => {
  const userBookmarkedShows = await bookmarkUtils();

  console.log(shows);

  return shows.map((show) => {
    if (userBookmarkedShows.includes(show.title)) {
      return { ...show, isBookmarked: true };
    } else {
      return { ...show, isBookmarked: false };
    }
  });
};
