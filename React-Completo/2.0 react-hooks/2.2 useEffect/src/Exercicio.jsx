import React from "react";
import ExercicioProduto from "./ExercicioProduto";

const Exercicio = () => {
  const [data, setData] = React.useState(null);

  const handleClick = async e => {
    let res = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
    ).then(res => res.json());
    setData(res);
    window.localStorage.setItem("Produto", res.id);
  };

  React.useEffect(() => {
    const handleLocalStorage = async () => {
      let res = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${window.localStorage.getItem(
          "Produto"
        )}`
      ).then(res => res.json());
      return setData(res);
    };
    handleLocalStorage();
  }, []);

  return (
    <>
      <div>
        <header>
          <h1>Preferência: {window.localStorage.getItem("Produto")}</h1>
        </header>
        <section>
          <button onClick={handleClick} style={{ margin: ".5rem" }}>
            notebook
          </button>
          <button onClick={handleClick}>smartphone</button>
        </section>
        {data && <ExercicioProduto data={data} />}
      </div>
    </>
  );
};

export default Exercicio;

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
