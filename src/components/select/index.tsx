import { ChangeEvent } from "react";
import { increaseRenderCount } from "../../util/render-stats-data";

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  id: string;
  label: string;
  options: Option[];
  value: string | number | null;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const Select = ({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
}: SelectProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="select-wrapper">
      <label htmlFor="select" className="select-label">
        {label}
      </label>
      <select
        id={id}
        value={value || ""}
        onChange={handleChange}
        disabled={disabled}
        aria-label={label}
        aria-required="true"
        aria-disabled={disabled}
        aria-live="polite"
        className="select-input"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => {
          increaseRenderCount("select-option");
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
