import { Form } from "./components/form";
import { FormProvider } from "./contexts/form";
import { AddressSuggestions } from "./components/address-suggestions";

export const App = () => {
  return (
    <FormProvider>
      <Form />
      <AddressSuggestions />
    </FormProvider>
  );
};
