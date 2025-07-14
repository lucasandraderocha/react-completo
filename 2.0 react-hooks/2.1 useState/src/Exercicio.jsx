// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
import React from "react";
import Product from "./Product";

const Exercicio = () => {
  const [url, setUrl] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    setLoading(true);
    let data = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    let result = await data.json();

    setUrl(result);
    setLoading(false);
  }

  return (
    <>
      <div style={{ display: "flex", gap: ".5rem" }}>
        <button onClick={handleClick}>tablet</button>
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>notebook</button>
      </div>
      {loading && <p>loading...</p>}
      {!loading && url && (
        <div>
          <Product url={url} />
        </div>
      )}
    </>
  );
};

export default Exercicio;
