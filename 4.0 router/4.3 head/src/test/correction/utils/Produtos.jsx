import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Produtos.module.css";

const Produtos = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);
  return (
    <>
      {data && (
        <section on className={`${styles.produtos} animeLeft`}>
          {data.map(product => (
            <Link to={`produto/${product.id}`} key={product.id}>
              <img
                src={product.fotos[0].src}
                alt={`Imagem do produto ${product.nome}`}
              />
              <h1 className={styles.nome}>{product.nome}</h1>
            </Link>
          ))}
        </section>
      )}
    </>
  );
};

export default Produtos;
