import { useParams } from "react-router-dom";
import styles from "./Produto.module.css";
import { useEffect } from "react";
import { useState } from "react";
import Container from "../../../components/Container";
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

  if (loading) return <div>Carregando...</div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <>
      <section className={styles.produto}>
        <Container>
          <h1>{produto.nome}</h1>
          <span className={styles.preco}>R$ {produto.preco}</span>
          <p>{produto.descricao}</p>
        </Container>
      </section>
    </>
  );
};

export default Produto;
