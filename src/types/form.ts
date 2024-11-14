export interface InputState {
  value: string;
  hasError: boolean;
  isMasked: boolean;
  errorMessage?: string;
}

export interface SelectState {
  value: string;
  hasError: boolean;
  errorMessage?: string;
}
