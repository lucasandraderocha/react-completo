import React from "react";

const CorrecaoProduct = ({ product }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (product !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then(res => res.json())
        .then(json => setData(json));
  }, [product]);

  if (data === null) return null;
  return (
    <>
      <div>
        <h1>{data.nome}</h1>
        <p>{data.preco}</p>
      </div>
    </>
  );
};

export default CorrecaoProduct;
