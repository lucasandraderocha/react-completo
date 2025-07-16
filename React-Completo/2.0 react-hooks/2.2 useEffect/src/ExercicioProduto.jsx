import React from "react";

const ExercicioProduto = ({ data }) => {
  return (
    <>
      <section>
        <div>
          <h1>{data.nome}</h1>
          <p>R$ {Number(data.preco).toFixed(2)}</p>
        </div>
      </section>
    </>
  );
};

export default ExercicioProduto;
