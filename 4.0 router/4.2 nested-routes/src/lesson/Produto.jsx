import { NavLink, Outlet, useParams } from "react-router-dom";

const Produto = () => {
  const { id } = useParams();

  return (
    <>
      <section>
        <div>
          <h1>Produto</h1>
          <section className="flex flex-column gap-8 py-16 px-16 brd-sm rds-sm">
            <h1 className="typo-xlg">{id}</h1>
            <div>
              <NavLink to="">Descrição</NavLink>
              <NavLink to="analises">Análises</NavLink>
              <NavLink to="customizado">Customizado</NavLink>
            </div>
            <div>
              <Outlet />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Produto;
