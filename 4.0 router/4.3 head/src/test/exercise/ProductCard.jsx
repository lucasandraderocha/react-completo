import Container from "../../components/Container";
import { Link } from "react-router-dom";
import useCurrencyFormat from "./hooks/useCurrencyFormat";
import Image from "../../components/Image";

const ProductCard = ({ id, fotos, nome, preco }) => {
  const { handlePrice } = useCurrencyFormat();

  return (
    <>
      <Container className="animeLeft flex flex-1 flex-column py-16 px-16 brd-sm rds-lg gap-8">
        <Container className="animeBottom">
          <Link to={`produto/${id}`}>
            <Image height={300} width={"100%"} src={fotos[0].src} />
          </Link>
        </Container>
        <h1 className="animeRight">{nome}</h1>
        <p className="animeTop">{handlePrice(preco)}</p>
        <Link
          to={`produto/${id}`}
          className="animeBottom py-24 px-16 color-neutral-deep rds-md pointer typo-main typo-md link text-center"
        >
          Comprar
        </Link>
      </Container>
    </>
  );
};

export default ProductCard;
