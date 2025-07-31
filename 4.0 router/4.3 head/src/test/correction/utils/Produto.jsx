import { useParams } from "react-router-dom";
import styles from "./Produto.module.css";
import { useEffect } from "react";
import { useState } from "react";
import Container from "../../../components/Container";
import Head from "./Head";
const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduto = async url => {
      try {
        setError(null);
        setLoading(true);
        let res = await fetch(url);
        let json = await res.json();
        setProduto(json);
      } catch (err) {
        let e = Error(`Error ⇢ ${err}`);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <>
      <Head title={`${produto.nome}`} />
      <section
        className={`${styles.produto} animeLeft`}
        description={`Página do produto ${produto.nome}`}
      >
        <Container>
          {produto.fotos.map(foto => (
            <img key={foto.titulo} src={foto.src} alt={foto.titulo} />
          ))}
        </Container>
        <Container className="flex flex-column gap-8">
          <h1>{produto.nome}</h1>
          <span className={styles.preco}>R$ {produto.preco}</span>
          <p className={styles.descricao}>{produto.descricao}</p>
        </Container>
      </section>
    </>
  );
};

export default Produto;
