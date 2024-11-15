import { useForm } from "../../contexts/form";
import { Input } from "../input";
import { Select } from "../select";
import { CITY_LIST } from "../../data/city-list";

export const Form = () => {
  const { name, surname, city, updateField } = useForm();

  return (
    <div>
      <Input value={name.value} onChange={(event) => updateField('name', { value: event.currentTarget.value })} id="name" label="Name" hint="Please provide your first name"/>
      <Input value={surname.value} onChange={(event) => updateField('surname', { value: event.currentTarget.value })} id="surname" label="Surname" hint="Please provide your surname"/>
      <Select label="City" options={CITY_LIST} value={city.value} onChange={(value) => updateField('city', { value })} />
    </div>
  );
}
