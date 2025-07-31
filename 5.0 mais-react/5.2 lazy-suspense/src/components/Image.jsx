import React from "react";

const Image = ({ src, height, width }) => {
  const imgContainer = {
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    objectPosition: "center",
    backgroundRepeat: "no-repeat",
    height: height,
    width: width,
    borderRadius: "1rem",
  };
  return (
    <>
      <div style={imgContainer}></div>
    </>
  );
};

export default Image;
