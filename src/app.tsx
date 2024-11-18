import { Form } from "./components/form";
import { FormProvider } from "./contexts/form";

export const App = () => {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
};
