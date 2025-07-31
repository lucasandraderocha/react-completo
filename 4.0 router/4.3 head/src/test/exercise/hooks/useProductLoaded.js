import { useState } from "react";
import useFetch from "./useFetch";

const useProductLoaded = () => {
  const { handleFetch, loading, error } = useFetch();
  const [productData, setProductData] = useState(null);
  const dataFetch = async id => {
    const { json } = await handleFetch(
      `https://ranekapi.origamid.dev/json/api/produto/${id}`
    );
    console.log(json);
    if (json) setProductData(json);
  };
  return { productData, dataFetch, loading, error };
};

export default useProductLoaded;
