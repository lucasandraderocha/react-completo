import Label from "../label/Label";

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map(option => (
        <Label
          key={option}
          className="flex flex-row gap-8 py-4 px-4 brd-sm rds-sm"
        >
          <input
            style={{ accentColor: "black" }}
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
