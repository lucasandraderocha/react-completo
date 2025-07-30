import React from "react";

const Home = () => {
  const options = ["Home"];
  return (
    <>
      <main className="flex flex-column gap-8">
        <section className="py-16 px-16 rds-sm brd-sm text-center">
          <h1>Página não encontrada</h1>
        </section>
        <section>
          <ul className="flex gap-8 py-8 px-8 brd-sm rds-sm justify-center">
            {options.map(opt => (
              <li
                className="flex py-8 px-8 brd-sm rds-sm flex-1 align-center justify-center pointer color-neutral-deep"
                key={opt}
              >
                {opt}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
