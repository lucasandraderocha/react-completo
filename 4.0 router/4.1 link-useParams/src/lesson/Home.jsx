import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="flex flex-column gap-8">
        <section className="py-16 px-16 rds-sm brd-sm text-center">
          <h1>Home</h1>
        </section>
        <section>
          <div className="flex flex-column py-8 px-8 brd-sm rds-sm flex-1 align-center justify-center pointer">
            <p>Essa é a Home</p>
            <section className="flex gap-8 py-16 px-16 rds-sm brd-sm text-center">
              <NavLink to="produto/notebook">Notebook</NavLink>
              <NavLink to="produto/smartphone">Smartphone</NavLink>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
