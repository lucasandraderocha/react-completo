import { useState } from "react";
import useFetch from "./useFetch";

const useProductListLoaded = () => {
  const { handleFetch, loading, error } = useFetch();
  const [productData, setProductData] = useState(null);
  const dataFetch = async () => {
    const { json } = await handleFetch(
      "https://ranekapi.origamid.dev/json/api/produto"
    );
    if (json) setProductData(json);
  };
  return { productData, dataFetch, loading, error };
};

export default useProductListLoaded;
