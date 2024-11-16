import { ADDRESS_SUGGESTIONS } from "../../data/location";
import { useForm } from "../../contexts/form";
import { increaseRenderCount } from "../../util/render-stats-data";
import { getMatchingTextPartsAsMarked } from "./helpers";

export const AddressSuggestions = () => {
  const { city, address, updateField } = useForm();

  const filteredSuggestions = city.value
    ? ADDRESS_SUGGESTIONS.filter(
        (suggestion) => suggestion.cityId === city.value,
      )
    : ADDRESS_SUGGESTIONS;

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
                updateField("city", { value: suggestion.cityId as any });
                updateField("district", {
                  value: suggestion.districtId as any,
                });
                updateField("address", { value: suggestion.address });
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
