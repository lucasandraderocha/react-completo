import { useContext } from "react";
import ExerciseContext from "../contexts/ExerciseContext";

const useSubmitHandler = () => {
  const { setStatus } = useContext(ExerciseContext);

  const handleSubmit = async (url, options) => {
    const res = await fetch(url, options);

    return setStatus(res.status);
  };

  return handleSubmit;
};

export default useSubmitHandler;
