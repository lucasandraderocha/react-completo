import Container from "../../components/Container";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container className="flex flex-column align-center justify-center gap-8py-16 px-16 brd-sm rds-sm h-fit">
        <h1 className="typo-xlg">Home</h1>
        <Container className="flex gap-16">
          <NavLink to="" className="w-fit link">
            Produtos
          </NavLink>
          <NavLink to="contato" className="w-fit link">
            Contato
          </NavLink>
        </Container>
      </Container>
    </>
  );
};

export default Header;
