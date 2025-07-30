import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = useCallback(async (url, options) => {
    let res;
    let json;
    try {
      setError(null);
      setLoading(true);
      res = await fetch(url, options);
      json = await res.json();
      setData(json);
    } catch (e) {
      let err = new Error(`ERROR ⇢ ${e}`);
      console.log(err);
    } finally {
      setLoading(false);
    }
    return { res, json };
  }, []);

  return { data, error, loading, handleFetch };
};

export default useFetch;
