import React from "react";

const ExerciseProduct = ({ forwardedData }) => {
  return (
    <>
      <div>
        <h2>{forwardedData.nome}</h2>
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(forwardedData.preco)}
        </p>
      </div>
    </>
  );
};

export default ExerciseProduct;
