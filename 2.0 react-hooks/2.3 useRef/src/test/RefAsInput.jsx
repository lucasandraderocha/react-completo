import React, { useEffect, useRef } from "react";

const RefAsInput = () => {
  const InputRef = useRef("");

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  return (
    <>
      <div>
        <p></p>
        <input
          ref={InputRef}
          type="text"
          placeholder="Digite aqui seu nome..."
        />
      </div>
    </>
  );
};

export default RefAsInput;
