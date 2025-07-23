const Option = ({ children, ...props }) => {
  return (
    <option {...props} className="brd-sm rds-sm color-neutral-deep typo-main">
      {children}
    </option>
  );
};

export default Option;
