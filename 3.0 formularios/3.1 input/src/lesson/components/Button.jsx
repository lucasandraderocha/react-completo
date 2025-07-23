import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="py-16 px-24 typo-main color-neutral-deep rds-sm pointer disabled"
    >
      {children}
    </button>
  );
};

export default Button;
