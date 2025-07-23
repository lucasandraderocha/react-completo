import { useCallback, useContext, useState } from "react";
import ExerciseContext from "../contexts/ExerciseContext";

const useSubmitHandler = () => {
  const { setStatus } = useContext(ExerciseContext);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSubmit = useCallback(
    async (url, options) => {
      let res;
      try {
        setError(null);
        setLoading(true);
        console.log("Loading: ", loading);
        res = await fetch(url, options);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }

      return res ? setStatus(res.status) : setStatus(null);
    },
    [setStatus]
  );

  return { error, loading, handleSubmit };
};

export default useSubmitHandler;
