import { useContext, useEffect } from "react";

import ExerciseContext from "../contexts/ExerciseContext";

import useChange from "../hooks/useChange";
import useAddressData from "../hooks/useAddressData";

import Select from "./Select";
import Label from "./Label";
import Option from "./Option";

const SelectFieldForm = () => {
  const { selectField } = useContext(ExerciseContext);
  const { form, onChange } = useChange();
  const { cities, states, fetchCitiesByState } = useAddressData();

  useEffect(() => {
    console.log(form.id);
  }, [form]);
  return (
    <>
      <div key={selectField.index}>
        <Label>
          {selectField.label}
          <Select
            id={selectField.id}
            type={selectField.type}
            placeholder={selectField.placeholder}
            value={form[selectField.id]}
            onChange={onChange}
          >
            <Option disabled>Selecione um Estado</Option>
            {states &&
              states.map(state => (
                <Option
                  key={state.id}
                  value={state.nome}
                >{`${state.sigla} ⇢ ${state.nome}`}</Option>
              ))}
          </Select>
        </Label>
        {/* <Label>
          {selectField.label}
          <Select
            id={selectField.id}
            type={selectField.type}
            placeholder={selectField.placeholder}
            value={form[selectField.id]}
            onChange={onChange}
          >
            <Option disabled>Selecione a Cidade</Option>
            {cities &&
              cities.map(city => (
                <Option value={city.nome}>{city.nome}</Option>
              ))}
          </Select>
        </Label> */}
      </div>
    </>
  );
};

export default SelectFieldForm;
