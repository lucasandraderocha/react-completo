import { useContext } from "react";
import ExerciseContext from "../contexts/ExerciseContext";

const useChange = () => {
  const { form, setForm } = useContext(ExerciseContext);

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
