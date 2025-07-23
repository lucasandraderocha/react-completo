import React from "react";

const Form = ({ children, ...props }) => {
  return (
    <form
      {...props}
      className="gap-8"
      style={{
        display: "grid",
        gridColumn: "2/ 4",
        alignSelf: "center",
        justifySelf: "stretch",
      }}
    >
      {children}
    </form>
  );
};

export default Form;
