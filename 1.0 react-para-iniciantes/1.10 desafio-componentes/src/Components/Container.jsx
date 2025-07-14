import React from "react";

const Container = ({ children }) => {
  const primary = {
    backgroundColor: "faf9f9",
    border: "4px solid #bee3db3d",
    borderRadius: "1rem",
    padding: "1rem",
  };

  return <div style={primary}>{children}</div>;
};

export default Container;
