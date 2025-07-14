import React from "react";

const Input = ({ label, id, ...props }) => {
  console.log(props);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </>
  );
};

export default Input;
