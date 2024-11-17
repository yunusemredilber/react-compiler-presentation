import React, { createContext, useContext, useState } from "react";
import { InputState, SelectState } from "../types/form";
import {
  createDefaultInputState,
  createDefaultSelectState,
} from "../util/form";

interface FormFields {
  name: InputState;
  surname: InputState;
  city: SelectState<number | null>;
  district: SelectState<number | null>;
  address: InputState;
}

export type FormContext = FormFields & {
  updateField: <K extends keyof FormFields>(
    field: K,
    value: Partial<FormFields[K]>,
  ) => void;
};

const defaultFormContext = {} as FormContext;

const FormContext = createContext(defaultFormContext);

const useForm = (): FormContext => useContext(FormContext);

interface FromProviderProps {
  children: React.ReactNode;
}

function FormProvider({ children }: FromProviderProps) {
  const [data, setData] = useState<FormFields>({
    name: createDefaultInputState(),
    surname: createDefaultInputState(),
    city: createDefaultSelectState<number | null>(null),
    district: createDefaultSelectState<number | null>(null),
    address: createDefaultInputState(),
  });

  const updateField = <K extends keyof FormFields>(
    field: K,
    value: Partial<FormFields[K]>,
  ) => {
    setData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        ...value,
      },
    }));
  };

  return (
    <FormContext.Provider
      value={{
        ...data,
        updateField,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export { FormProvider, useForm };
