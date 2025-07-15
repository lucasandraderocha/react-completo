import React from "react";
import CorrecaoProduct from "./CorrecaoProduct";

const Correcao = () => {
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const localProduct = window.localStorage.getItem("produto");
    if (localProduct !== null) setProduct(localProduct);
  }, []);

  React.useEffect(() => {
    if (product !== null) window.localStorage.setItem("produto", product);
  }, [product]);

  const handleClick = ({ target }) => {
    setProduct(target.innerText);
  };

  return (
    <>
      <div>
        <header>
          <h1>Correção</h1>
          <h1>Preferência: {product}</h1>
        </header>
        <section>
          <button onClick={handleClick} style={{ margin: ".5rem" }}>
            notebook
          </button>
          <button onClick={handleClick}>smartphone</button>
        </section>
      </div>
      <CorrecaoProduct product={product} />
    </>
  );
};

export default Correcao;
