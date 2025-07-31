import { useEffect } from "react";

import useProductListLoaded from "../hooks/useProductListLoaded";

import Container from "../../../components/Container";
import ProductCard from "../ProductCard";
import Loading from "../Loading";

const ProductList = () => {
  const { dataFetch, productData, loading } = useProductListLoaded();

  useEffect(() => {
    dataFetch();
  }, []);
  return (
    <>
      {loading ? (
        <Loading loadingState={loading} stepIcon={"▧"}>
          <h1>Loading</h1>
        </Loading>
      ) : (
        <Container
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem",
          }}
        >
          {productData &&
            productData.map(({ fotos, id, nome, preco }) => (
              <ProductCard
                nome={nome}
                preco={preco}
                fotos={fotos}
                key={id}
                id={id}
              />
            ))}
        </Container>
      )}
    </>
  );
};

export default ProductList;
