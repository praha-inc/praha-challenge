import fetch from "node-fetch";

export const fetchName = async (): Promise<string> => {
  const result = await fetch("https://randomuser.me/api/", {
    headers: { "Content-type": "application/json" },
  });
  return (await result.json()).results[0].name.first;
};

export const fetchValidName = async (
  fetchNameFunction: () => Promise<string>
): Promise<string> => {
  const name = await fetchNameFunction();
  if (name.length > 10) {
    throw new Error("name too long!");
  }
  return name;
};
