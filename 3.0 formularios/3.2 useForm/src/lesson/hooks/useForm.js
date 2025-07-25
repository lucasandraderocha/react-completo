import { useState } from "react";

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Por favor verifique as informações inseridas.",
  },
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: "Email inválido",
  },
};

const useForm = type => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  const validate = value => {
    if (type === false) return true;
    if (value.length === 0) {
      let e = new Error("Preencha um valor...");
      setError(e.message);
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      let e = new Error(types[type].message);
      setError(e.message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  return {
    value,
    setValue,
    error,
    onChange,

    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
