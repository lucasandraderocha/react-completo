import React from "react";

const ContainerIncrementTestCallback = ({ forwardedValue }) => {
  console.log(`ContainerIncrementTestCallback ->`, performance.now());
  return (
    <>
      <fieldset>
        <h4>Container Increment Children</h4>
        <p>{forwardedValue}</p>
      </fieldset>
    </>
  );
};

export default ContainerIncrementTestCallback;
