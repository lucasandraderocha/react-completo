import { useCallback, useContext } from "react";
import ExerciseContext from "../contexts/ExerciseContext";

const useSubmitHandler = () => {
  const { setStatus, setLoading, loading } = useContext(ExerciseContext);

  const handleSubmit = useCallback(
    async (url, options) => {
      let res;
      try {
        setLoading(true);
        res = await fetch(url, options);
      } catch (error) {
        console.log(error);
      } finally {
        setStatus(res.status);
        setLoading(false);
      }
      return res;
    },
    [setStatus, setLoading]
  );
  return { loading, handleSubmit };
};

export default useSubmitHandler;
