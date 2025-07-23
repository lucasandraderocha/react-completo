import useChange from "../hooks/useChange";

import Label from "./Label";
import Input from "./Input";

const InputFieldForm = ({ inputFields }) => {
  const { form, onChange } = useChange();
  console.log(inputFields);
  return (
    <>
      {inputFields.map(({ id, label, type, placeholder }, index) => (
        <div key={index}>
          <Label>
            {label}
            <Input
              id={id}
              type={type}
              placeholder={placeholder}
              value={form[id] || ""}
              onChange={onChange}
              required
            />
          </Label>
        </div>
      ))}
    </>
  );
};

export default InputFieldForm;
