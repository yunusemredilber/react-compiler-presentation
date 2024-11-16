import { ADDRESS_SUGGESTIONS } from "../../data/location";
import { useForm } from "../../contexts/form";
import { increaseRenderCount } from "../../util/render-stats-data";

export const AddressSuggestions = () => {
  const { updateField } = useForm();

  return (
    <div className="address-suggestions-wrapper">
      <h4>Auto Complete Suggestions</h4>
      <ul>
        {ADDRESS_SUGGESTIONS.map((suggestion) => {
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
