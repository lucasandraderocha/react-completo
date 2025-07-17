// ## 🟢 Exercício 1: Filtragem de Lista de Produtos (Iniciante)

// ### Problema
// Você tem uma lista de produtos que precisa ser filtrada por
// nome e categoria. Sem otimização, a filtragem roda a cada re-renderização.

import React, { useEffect, useMemo, useState } from "react";

const categories = ["Clothes", "Utils", "Food", "Health", "Photography"];
const productList = Array.from({ length: 3000 }, (_, i) => ({
  id: i,
  name: `Product ${Math.floor((Math.random() * i) / 10)}`,
  category: categories[Math.floor(Math.random() * categories.length)],
}));

const FilterList = () => {
  const [listProducts, setListProducts] = useState([]);
  const [sortBy, setSortby] = useState(null);
  const renderProducts = useMemo(() => {
    console.time("Filtragem");
    let result = [...listProducts].filter(item => item.category === sortBy);
    console.timeEnd("Filtragem");
    if (sortBy) return result;
    return [...listProducts];
  }, [sortBy, listProducts]);
  useEffect(() => {
    setListProducts(productList);
  }, []);
  return (
    <>
      <h4>Filter List</h4>
      <div>
        <label htmlFor="category">category</label>
        <select
          value={sortBy}
          id="category"
          onChange={e => setSortby(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <ul>
          {renderProducts.map(item => (
            <li key={`item-${item.id}`}>
              <div>
                <p>{item.name}</p>
                <p>{item.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterList;
