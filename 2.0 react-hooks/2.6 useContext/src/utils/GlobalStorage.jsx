import { useEffect, useState } from "react";

import GlobalContext from "./GlobalContext";

export const GlobalStorage = ({ children }) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    callProducts();
  }, []);

  const callProducts = () => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then(res => res.json())
      .then(json => setProductList([...json]));
  };
  return (
    <GlobalContext.Provider
      value={{ productList, callProducts, setProductList }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
