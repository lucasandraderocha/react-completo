import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useProductLoaded from "../hooks/useProductLoaded";
import useCurrencyFormat from "../hooks/useCurrencyFormat";

import Container from "../../../components/Container";
import Image from "../../../components/Image";
import Head from "../Head";
import Loading from "../Loading";

const Product = () => {
  const { dataFetch, productData, loading } = useProductLoaded();
  const { id } = useParams();
  const { handlePrice } = useCurrencyFormat();

  useEffect(() => {
    dataFetch(id);
  }, []);
  return (
    <>
      <Head id={id} />
      {loading ? (
        <Loading loadingState={loading} stepIcon={"▧"}>
          <h1>Loading</h1>
        </Loading>
      ) : (
        productData && (
          <Container className="flex gap-16 animeTop">
            <Container className="flex-1">
              <Image
                height={400}
                width={"100%"}
                src={productData.fotos[0].src}
              />
            </Container>
            <Container className="animeRight flex-1 flex flex-column gap-16">
              <h1>{productData.nome}</h1>
              <Container
                className=" animeBottom py-8 px-8 rds-sm w-fit"
                style={{
                  color: "#0b6",
                  backgroundColor: "#2fef2f40",
                  border: "thin solid #2fef2f80",
                }}
              >
                <p>{handlePrice(productData.preco)}</p>
              </Container>
              <p>{productData.descricao}</p>
            </Container>
          </Container>
        )
      )}
    </>
  );
};

export default Product;
