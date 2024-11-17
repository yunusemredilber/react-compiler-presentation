import { useForm } from "../../contexts/form";
import { increaseRenderCount } from "../../util/render-stats-data";
import {
  autoFillAddressFromSuggestion,
  getFilteredSuggestions,
  getMatchingTextPartsAsMarked,
} from "./helpers";

export const AddressSuggestions = () => {
  const { city, address, updateField } = useForm();

  const filteredSuggestions = getFilteredSuggestions(city.value);

  return (
    <div className="address-suggestions-wrapper">
      <h4>Auto Complete Suggestions</h4>
      <ul style={{ width: filteredSuggestions.length < 10 ? 300 : 1000 }}>
        {filteredSuggestions.map((suggestion) => {
          {
            (() => {
              increaseRenderCount("suggestion-element");
              return null;
            })();
          }
          return (
            <li
              key={suggestion.address}
              onClick={() => {
                autoFillAddressFromSuggestion({
                  suggestion,
                  updateField,
                });
              }}
            >
              {getMatchingTextPartsAsMarked(suggestion.address, address.value)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
