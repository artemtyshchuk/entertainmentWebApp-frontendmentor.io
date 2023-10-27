import { DataType } from "types";

export const bookmarkUtils = async (
  method: string = "GET",
  title: string = ""
) => {
  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (title) {
    options.body = JSON.stringify({ title });
  }

  const response = await fetch("db.json", options);
  const data = (await response.json()) as DataType[];

  return data;
};
