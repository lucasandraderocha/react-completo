import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="py-12 px-16 brd-md rds-sm color-neutral-falo typo-main"
    />
  );
};

export default Input;
