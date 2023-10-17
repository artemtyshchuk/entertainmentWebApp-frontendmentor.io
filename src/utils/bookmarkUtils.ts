export async function bookmarkUtils(
  method: string = "GET",
  title: string = ""
) {
  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (title) {
    options.body = JSON.stringify({ title });
  }

  const response = await fetch("./db.json", options);
  const data = await response.json();
  console.log(data);

  if (!response) {
    return {
      error: {
        message: data.message,
        field: data.field,
      },
    };
  }
  return data;
}
