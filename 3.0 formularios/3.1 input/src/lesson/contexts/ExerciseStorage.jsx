import { useState } from "react";

import ExerciseContext from "./ExerciseContext";
import formField from "../utils/formField";

const ExerciseStorage = ({ children }) => {
  const [loading, setLoading] = useState(false);
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
    <ExerciseContext.Provider
      value={{ loading, setLoading, form, setForm, status, setStatus }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseStorage;
