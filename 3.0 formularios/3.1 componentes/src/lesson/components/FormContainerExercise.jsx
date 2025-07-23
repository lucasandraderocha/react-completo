import { useContext } from "react";

import ExerciseContext from "../contexts/ExerciseContext";

import useChange from "../hooks/useChange";
import useSubmitHandler from "../hooks/useSubmitHandler";

import SelectFieldForm from "./SelectFieldForm";
import InputFieldForm from "./InputFieldForm";
import Button from "./Button";
import Form from "./form";

const FormContainerExercise = () => {
  const { form } = useChange();
  const { status, inputField } = useContext(ExerciseContext);
  const { loading, handleSubmit } = useSubmitHandler();

  const handleOnSubmit = e => {
    e.preventDefault();
    handleSubmit("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });
  };

  return (
    <>
      {!loading && !status && (
        <Form onSubmit={handleOnSubmit}>
          <InputFieldForm inputFields={inputField} />
          <SelectFieldForm />
          <Button>Enviar</Button>
        </Form>
      )}
    </>
  );
};

export default FormContainerExercise;
