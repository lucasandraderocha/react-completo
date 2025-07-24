import { useState } from "react";

import formField from "../utils/formField";

const useChange = () => {
  const [form, setForm] = useState(
    formField.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    })
  );

  const onChange = e => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };
  return {
    form,
    onChange,
    setForm,
    bind: {
      form,
      onChange,
    },
  };
};

export default useChange;
