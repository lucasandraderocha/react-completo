import Label from "./Label";
import Input from "./Input";

const InputFieldForm = ({ fields, values, onFieldChange }) => {
  return (
    <>
      {fields.map(({ id, label, type, placeholder }) => (
        <div key={id}>
          <Label>
            {label}
            <Input
              id={id}
              type={type}
              placeholder={placeholder}
              value={values[id] || ""}
              onChange={onFieldChange}
              required
            />
          </Label>
        </div>
      ))}
    </>
  );
};

export default InputFieldForm;
