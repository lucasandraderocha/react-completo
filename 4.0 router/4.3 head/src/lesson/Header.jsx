import { NavLink } from "react-router-dom";

const Header = () => {
  const links = ["Home", "Contato", "Sobre", "Login"];
  return (
    <>
      <header className="flex flex-column gap-8">
        <section>
          <ul className="flex gap-8 py-8 px-8 brd-sm rds-sm justify-center">
            {links.map(link => (
              <NavLink key={link} to={link === "Home" ? "/" : `/${link}`}>
                <li className="flex py-8 px-8 brd-sm rds-sm flex-1 align-center justify-center pointer color-primary">
                  {link}
                </li>
              </NavLink>
            ))}
          </ul>
        </section>
      </header>
    </>
  );
};

export default Header;
