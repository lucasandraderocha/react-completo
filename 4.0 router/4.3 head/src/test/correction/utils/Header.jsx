import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  const handleLinkActive = ({ isActive }) => {
    return isActive ? styles.active : styles.link;
  };
  return (
    <>
      <nav className={styles.header}>
        <ul>
          <li>
            <NavLink className={handleLinkActive} to="/" end>
              Produto
            </NavLink>
          </li>
          <li>
            <NavLink className={handleLinkActive} to="contato">
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
