import React from "react";
import Link from "./Link";
import Container from "./Container";

const products = [
  { model: "Notebook", propriedades: ["16GB RAM", "512GB de Armazenamento"] },
  { model: "Smartphone", propriedades: ["8GB RAM", "128GB de Armazenamento"] },
];
const Products = () => {
  let container = products.map(({ model, propriedades }) => (
    <Container>
      <h1>{model}</h1>
      <ul>
        {propriedades.map(prop => (
          <li>{prop}</li>
        ))}
      </ul>
    </Container>
  ));

  return (
    <>
      <Link href="/">Home</Link>
      <h1 style={{ color: "#89b0ae" }}>Products</h1>
      {container}
    </>
  );
};

export default Products;
