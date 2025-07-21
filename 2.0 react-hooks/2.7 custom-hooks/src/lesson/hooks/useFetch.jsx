import { useCallback, useState } from "react";

const set = new Set();
const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (url, options) => {
    let res;
    let json;
    try {
      setError(null);
      setLoading(true);
      res = await fetch(url, options);
      json = await res.json();
    } catch (e) {
      json = null;
      setError(e);
    } finally {
      setData(json);
      setLoading(false);
    }
    console.log(res, json);
    return { res, json };
  }, []);

  console.log(set.add(request));
  return { data, error, loading, request };
};

export default useFetch;
