import { useState } from "react";

import ExerciseContext from "./ExerciseContext";
import formField from "../utils/formField";

const ExerciseStorage = ({ children }) => {
  const [status, setStatus] = useState(null);
  const [form, setForm] = useState(
    formField.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    })
  );

  return (
    <ExerciseContext.Provider value={{ form, setForm, status, setStatus }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseStorage;
