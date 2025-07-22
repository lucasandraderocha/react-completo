import { useState } from "react";
import ExerciseContext from "./ExerciseContext";

const ExerciseStorage = ({ children }) => {
  const [status, setStatus] = useState(null);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  return (
    <ExerciseContext.Provider value={{ form, setForm, status, setStatus }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseStorage;
