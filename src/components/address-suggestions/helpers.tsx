import { ReactElement } from "react";

export const getMatchingTextPartsAsMarked = (
  text: string,
  searchText: string,
): (ReactElement | string)[] => {
  const regex = new RegExp(`(${searchText || "no-match"})`, "i");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? <mark key={index}>{part}</mark> : part,
  );
};
