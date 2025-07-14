// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const Exercicio = () => {
  let precoFiltrado = produtos.filter(({ preco }) => {
    const parsedPreco = Number(preco.replace("R$ ", ""));
    return parsedPreco > 1500;
  });
  let produtoListado = precoFiltrado.map(({ nome, preco, cores }) => (
    <>
      <h1>{nome}</h1>
      <p>{preco}</p>
      <ul>
        {cores.map((cor, index) => (
          <li
            key={`cor${cor.length * index}`}
            style={{ color: "white", backgroundColor: cor }}
          >
            {cor}
          </li>
        ))}
      </ul>
    </>
  ));
  return <section>{produtoListado}</section>;
};

export default Exercicio;
