import { ReactElement } from "react";
import { increaseRenderCount } from "../../util/render-stats-data";
import { ADDRESS_SUGGESTIONS } from "../../data/location";

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

export function getFilteredSuggestions(cityId?: number | null) {
  increaseRenderCount("get-filtered-suggestions");

  if (!cityId) {
    return ADDRESS_SUGGESTIONS;
  }

  return ADDRESS_SUGGESTIONS.filter(
    (suggestion) => suggestion.cityId === cityId,
  );
}

export const autoFillAddressFromSuggestion = ({
  suggestion,
  updateField,
}: {
  suggestion: any;
  updateField: any;
}) => {
  updateField("city", { value: suggestion.cityId });
  updateField("district", {
    value: suggestion.districtId,
  });
  updateField("address", { value: suggestion.address });
};
