import { ADDRESS_SUGGESTIONS } from "../../data/location";
import { useForm } from "../../contexts/form";
import { increaseRenderCount } from "../../util/render-stats-data";

export const AddressSuggestions = () => {
  const { city, updateField } = useForm();

  const filteredSuggestions = city.value ? ADDRESS_SUGGESTIONS.filter(suggestion => suggestion.cityId.toString() === city.value) : ADDRESS_SUGGESTIONS;

  return (
    <div className="address-suggestions-wrapper">
      <h4>Auto Complete Suggestions</h4>
      <ul style={{ width: filteredSuggestions.length < 10 ? 300 : 1000 }}>
        {filteredSuggestions.map((suggestion) => {
          {(() => {
            increaseRenderCount('suggestion-element');
            return null;
          })()}
          return <li key={suggestion.address} onClick={() => {
            console.log('suggestion.cityId.toString()', suggestion.cityId.toString())
            updateField('city', { value: suggestion.cityId as any });
            updateField('city', { value: '1' as any });
            updateField('district', { value: suggestion.districtId.toString() });
            updateField('address', { value: suggestion.address });
          }}>{suggestion.address}</li>;
        })}
      </ul>
    </div>
  );
}
