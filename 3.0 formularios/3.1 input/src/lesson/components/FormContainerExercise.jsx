import { useContext } from "react";

import useChange from "../hooks/useChange";
import ExerciseContext from "../contexts/ExerciseContext";
import useSubmitHandler from "../hooks/useSubmitHandler";
import formField from "../utils/formField";

import Form from "./form";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

const FormContainerExercise = () => {
  const { form: input, onChange } = useChange();
  const { status } = useContext(ExerciseContext);
  const { error, loading, handleSubmit } = useSubmitHandler();

  const handleOnSubmit = e => {
    e.preventDefault();
    handleSubmit("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(input),
    });
  };

  return (
    <>
      {!loading && !status && (
        <Form onSubmit={handleOnSubmit}>
          {formField.map(({ id, label, type, placeholder }, index) => (
            <div key={index}>
              <Label>
                {label}
                <Input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={input[id]}
                  onChange={onChange}
                  required
                />
              </Label>
            </div>
          ))}
          <Button>Enviar</Button>
        </Form>
      )}
    </>
  );
};

export default FormContainerExercise;
