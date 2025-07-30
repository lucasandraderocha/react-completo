import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Produto = () => {
  const { id } = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  console.log(search.get("model"));

  return (
    <>
      <section>
        <div>
          <h1>Produto</h1>
          <section className="flex flex-column gap-8 py-16 px-16 brd-sm rds-sm">
            <h1 className="typo-xlg">{id}</h1>
            <p>Cor: {search.get("color")}</p>
            <p>Memória: {search.get("memory")}</p>
          </section>
        </div>
      </section>
    </>
  );
};

export default Produto;
