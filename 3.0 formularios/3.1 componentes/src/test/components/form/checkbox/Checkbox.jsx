import Label from "../input/Label";

const Checkbox = ({ options, value, setValue, ...props }) => {
  const handleChange = ({ target }) => {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(
        value.filter(item => {
          return item !== target.value;
        })
      );
    }
  };

  return (
    <>
      {options.map(option => (
        <Label key={option} className="flex gap-8 brd-sm rds-sm py-4 px-8">
          <input
            style={{
              accentColor: "var(--color-primary)",
            }}
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
            {...props}
          />
          <p>{option}</p>
        </Label>
      ))}
    </>
  );
};

export default Checkbox;
