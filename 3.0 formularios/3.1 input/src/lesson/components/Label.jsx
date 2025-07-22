import React from "react";

const Label = ({ children, ...props }) => {
  return (
    <label {...props} className="flex flex-column gap-4">
      {children}
    </label>
  );
};

export default Label;
