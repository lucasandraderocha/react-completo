import React from "react";

const Option = ({ id, value, children, ...props }) => {
  return (
    <>
      <option id={id} value={value} {...props}>
        {children}
      </option>
    </>
  );
};

export default Option;
