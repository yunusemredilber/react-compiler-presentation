import {InputState, SelectState} from "../types/form";

export const createDefaultInputState = (): InputState => ({
  value: '',
  hasError: false,
  isMasked: false,
  errorMessage: undefined,
});

export const createDefaultSelectState = <ValueType>(defaultValue: ValueType): SelectState<ValueType> => ({
  value: defaultValue,
  hasError: false,
  errorMessage: undefined,
});
