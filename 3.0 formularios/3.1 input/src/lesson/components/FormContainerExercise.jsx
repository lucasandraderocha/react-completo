import { useContext } from "react";

import useChange from "../hooks/useChange";
import ExerciseContext from "../contexts/ExerciseContext";
import useSubmitHandler from "../hooks/useSubmitHandler";

import Form from "./form";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

const FormContainerExercise = () => {
  const { form: input, onChange } = useChange();
  const { status } = useContext(ExerciseContext);
  const submitHandler = useSubmitHandler();

  const handleOnSubmit = e => {
    e.preventDefault();
    submitHandler("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(input),
    });
  };

  // console.log(input.nome);
  return (
    <>
      {!status && (
        <Form onSubmit={handleOnSubmit}>
          <Label htmlFor="nome">
            <p>Nome ↴</p>
            <Input
              type="text"
              id="nome"
              placeholder="João da Silva Sauro"
              value={input.nome}
              onChange={onChange}
            />
          </Label>
          <Label htmlFor="email">
            <p>Email ↴</p>
            <Input
              type="email"
              id="email"
              placeholder="joaosilvasauro@email.me"
              value={input.email}
              onChange={onChange}
            />
          </Label>
          <Label htmlFor="senha">
            <p>Senha ↴</p>
            <Input
              type="password"
              id="senha"
              autoComplete="true"
              placeholder="•••••••••••"
              value={input.senha}
              onChange={onChange}
            />
          </Label>
          <Label htmlFor="cep">
            <p>CEP ↴</p>
            <Input
              type="text"
              id="cep"
              placeholder="00000-000"
              value={input.cep}
              onChange={onChange}
            />
          </Label>
          <Label htmlFor="numero">
            <p>Número ↴</p>
            <Input
              type="number"
              id="numero"
              placeholder="00"
              value={input.numero}
              onChange={onChange}
            />
          </Label>
          <Label htmlFor="bairro">
            <p>Bairro ↴</p>
            <Input
              type="text"
              id="bairro"
              placeholder="Bairro Sul"
              value={input.bairro}
              onChange={onChange}
            />
          </Label>
          <Label htmlFor="cidade">
            <p>Cidade ↴</p>
            <Input
              type="text"
              id="cidade"
              placeholder="São Paulo"
              value={input.cidade}
              onChange={onChange}
            />
          </Label>
          <Label htmlFor="estado">
            <p>Estado ↴</p>
            <Input
              type="text"
              id="estado"
              placeholder="São Paulo"
              value={input.estado}
              onChange={onChange}
            />
          </Label>
          <Button>Enviar</Button>
        </Form>
      )}
    </>
  );
};

export default FormContainerExercise;
