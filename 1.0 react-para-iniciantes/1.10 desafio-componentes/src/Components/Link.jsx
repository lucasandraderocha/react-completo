import React from "react";

const Link = ({ link, ...props }) => {
  return (
    <>
      <a href={link} {...props}></a>
    </>
  );
};

export default Link;
