export interface InputState {
  value: string;
  hasError: boolean;
  isMasked: boolean;
  errorMessage?: string;
}

export interface SelectState<T> {
  value: T;
  hasError: boolean;
  errorMessage?: string;
}
