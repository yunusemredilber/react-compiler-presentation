import { ComponentProps, ReactElement } from "react";

export interface InputProps extends ComponentProps<'input'> {
  disabled?: boolean;
  hint?: ReactElement | string;
  label?: ReactElement | string;
}

export const Input = ({ label, hint, ...inputProps }: InputProps) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={inputProps.id}>{label}</label>
      <input {...inputProps} aria-describedby={`${inputProps.id}-hint`} />
      <span id={`${inputProps.id}-hint`} className="hint">{hint}</span>
    </div>
  );
}
