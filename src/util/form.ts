import {InputState, SelectState} from "../types/form";

export const createDefaultInputState = (): InputState => ({
  value: '',
  hasError: false,
  isMasked: false,
  errorMessage: undefined,
});

export const createDefaultSelectState = (): SelectState => ({
  value: '',
  hasError: false,
  errorMessage: undefined,
});
