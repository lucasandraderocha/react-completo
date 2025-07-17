import { useState } from "react";
import FilterAndOrderListMemo from "./FilterAndOrderListMemo";

const TestMemo = () => {
  const [list, setList] = useState(null);
  const handleProductCallClick = () => {
    fetch("https://dummyjson.com/products")
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => setList(data))
      .catch(console.error);
  };
  return (
    <>
      <h1>Test</h1>K
      <button onClick={handleProductCallClick}>Carregar Produtos</button>
      {list && <FilterAndOrderListMemo products={list.products} />}
    </>
  );
};

export default TestMemo;
