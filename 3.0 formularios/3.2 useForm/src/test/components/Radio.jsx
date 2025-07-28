const Radio = ({ pergunta, options, id, value, onChange, active }) => {
  if (!active) return null;
  return (
    <>
      <fieldset
        key={pergunta}
        className="flex flex-column gap-8 py-16 px-16 brd-sm rds-sm"
      >
        <legend className="typo-lg ">{pergunta}</legend>
        {options.map(option => (
          <label key={option} className="flex gap-8">
            <input
              type="radio"
              id={id}
              value={option}
              checked={value === option}
              onChange={onChange}
            />
            <p>{option}</p>
          </label>
        ))}
      </fieldset>
    </>
  );
};

export default Radio;
