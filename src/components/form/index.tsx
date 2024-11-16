import { useForm } from "../../contexts/form";
import { Input } from "../input";
import { Select } from "../select";
import { CITY_LIST, DISTRICT_LIST } from "../../data/location";

export const Form = () => {
  const { name, surname, city, district, address, updateField } = useForm();

  const filteredDistrictList = city.value ? DISTRICT_LIST.filter(district => district.cityId.toString() === city.value) : DISTRICT_LIST;

  return (
    <div>
      <Input
        value={name.value}
        onChange={(event) =>
          updateField('name', { value: event.currentTarget.value })
        }
        id="name"
        label="Name"
        hint="Please provide your first name"
      />
      <Input value={surname.value} onChange={(event) => updateField('surname', { value: event.currentTarget.value })} id="surname" label="Surname" hint="Please provide your surname"/>
      <Select label="City" options={CITY_LIST} value={city.value} onChange={(value) => updateField('city', { value })} />
      <Select label="District" options={filteredDistrictList} value={district.value} onChange={(value) => updateField('district', { value })} />
      <Input
        value={address.value}
        onChange={(event) =>
          updateField('address', { value: event.currentTarget.value })
        }
        id="address"
        label="Address"
        hint="Please provide your full text address"
      />
    </div>
  );
}
