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
  const { form, onChange } = useChange();
  const { status } = useContext(ExerciseContext);
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
          {formField.map(({ id, label, type, placeholder }, index) => (
            <div key={index}>
              <Label>
                {label}
                <Input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={form[id]}
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
