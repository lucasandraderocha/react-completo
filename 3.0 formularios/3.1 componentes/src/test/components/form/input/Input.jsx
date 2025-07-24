import Label from "./Label";

const Input = ({ type, label, id, ...props }) => {
  return (
    <>
      <Label className="flex flex-column gap-4">
        {label}
        <input type={type} id={id} name={id} {...props} />
      </Label>
    </>
  );
};

export default Input;
