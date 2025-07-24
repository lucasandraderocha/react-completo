import React from "react";

const Select = ({ children }) => {
  return (
    <select className="py-16 px-12 brd-md rds-sm typo-main">{children}</select>
  );
};

export default Select;
