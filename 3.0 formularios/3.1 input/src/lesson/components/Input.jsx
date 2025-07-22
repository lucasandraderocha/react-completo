import React from "react";

const Input = ({ ...props }) => {
  return (
    <input {...props} className="py-8 px-8 brd-sm rds-sm color-neutral-soft" />
  );
};

export default Input;
