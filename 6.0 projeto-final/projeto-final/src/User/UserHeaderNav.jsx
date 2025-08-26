import { useContext } from "react";
import { NavLink } from "react-router-dom";

import UserContext from "../UserContext";

import Button from "../components/form/Button";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <>
      <nav>
        <NavLink to="/account">Adicionar Foto</NavLink>
        <NavLink to="/account/stats ">Minhas Fotos</NavLink>
        <NavLink to="/account/post">Estatísticas</NavLink>
        <Button onClick={userLogout}>Sair</Button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
