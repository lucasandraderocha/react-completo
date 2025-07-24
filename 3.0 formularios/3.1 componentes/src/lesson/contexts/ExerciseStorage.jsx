import { useEffect, useState } from "react";

import ExerciseContext from "./ExerciseContext";
import formField from "../utils/formField";

const ExerciseStorage = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [inputField, setInputField] = useState([]);
  const [selectField, setSelectField] = useState([]);
  const [form, setForm] = useState(
    formField.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    })
  );

  useEffect(() => {
    let filteredInputFields = formField.filter(
      obj => obj.id !== "cidade" && obj.id !== "estado"
    );
    let filteredSelectFields = formField.filter(obj => {
      return ["cidade", "estado"].includes(obj.id);
    });
    setInputField(filteredInputFields);
    setSelectField(filteredSelectFields);
  }, []);

  return (
    <ExerciseContext.Provider
      value={{
        selectField,
        inputField,
        loading,
        setLoading,
        form,
        setForm,
        status,
        setStatus,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseStorage;
