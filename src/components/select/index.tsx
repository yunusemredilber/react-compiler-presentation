interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
}: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="select-wrapper">
      <label htmlFor="select" className="select-label">
        {label}
      </label>
      <select
        id="select"
        value={value}
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
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};