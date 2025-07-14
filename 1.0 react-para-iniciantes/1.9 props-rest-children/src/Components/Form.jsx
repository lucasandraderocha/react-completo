import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <form>
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="exemplo@email.aqui"
        required
      />
      <Input
        label="Password"
        id="password"
        type="password"
        placeholder="************"
        required
      />
      <Button>Olá, mundo</Button>
    </form>
  );
};

export default Form;
