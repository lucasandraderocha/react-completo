import Label from "../label/Label";

const Input = ({
  type,
  label,
  id,
  error,
  onBlur,
  onChange,
  value,
  placeholder,
  className,
}) => {
  return (
    <>
      <Label className="flex flex-column gap-4">
        {label}
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          error={error}
          onBlur={onBlur}
          onChange={onChange}
          className={className}
        />
      </Label>
    </>
  );
};

export default Input;
