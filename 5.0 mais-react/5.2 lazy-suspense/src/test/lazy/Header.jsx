import { NavLink } from "react-router-dom";
import Container from "../../components/Container";
import Button from "../../components/Button";
const Header = () => {
  return (
    <>
      <nav>
        <Container className="flex py-16 px-16 align-center justify-center brd-sm rds-sm">
          <ul className="flex gap-8 w-full justify-center">
            <li>
              <NavLink to="/" className="color-neutral-deep">
                <Button className="py-8 px-16 h-fit rds-sm pointer color-neutral-deep typo-body w-fit">
                  Home
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className="color-neutral-deep">
                <Button className="py-8 px-16 h-fit rds-sm pointer color-neutral-deep typo-body w-fit">
                  About
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className="color-neutral-deep">
                <Button className="py-8 px-16 h-fit rds-sm pointer color-neutral-deep typo-body w-fit">
                  Contact
                </Button>
              </NavLink>
            </li>
          </ul>
        </Container>
      </nav>
    </>
  );
};

export default Header;
