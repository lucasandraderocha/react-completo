import Label from "./Label";

const Radio = ({ options, value, setValue, ...props }) => {
  console.log(options);
  return (
    <>
      {options.map(option => (
        <Label
          key={option}
          className="flex flex-row gap-8 py-4 px-4 brd-sm rds-sm"
        >
          <input
            style={{ accentColor: "var(--primary)" }}
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          <p>{option}</p>
        </Label>
      ))}
    </>
  );
};

export default Radio;
