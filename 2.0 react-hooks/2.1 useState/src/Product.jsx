import React from "react";

const Product = ({ url }) => {
  return (
    <div>
      <h1>{url.nome}</h1>
      <p style={{ fontWeight: "400" }}>R$ {url.preco}</p>
      <img
        key={url.fotos[0].src}
        src={url.fotos[0].src}
        title={url.fotos[0].titulo}
        alt={url.fotos[0].titulo}
        width="350"
        height="350"
      />
    </div>
  );
};

export default Product;
