import React, { useEffect } from "react";

const FakeModal = ({ ref }) => {
  useEffect(() => {
    ref.current?.focus();
  }, [ref]);

  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email "
          name="email"
          id="email"
          ref={ref}
          placeholder="Digite seu e-mail aqui..."
          autoComplete="true"
        />
      </div>
    </>
  );
};

export default FakeModal;
