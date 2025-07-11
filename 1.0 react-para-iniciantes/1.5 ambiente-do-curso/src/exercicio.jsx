// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const Exercicio = () => {
  const clientNameHeading = {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  };

  const containerDiv = {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  };
  const dados = luana;

  return (
    <>
      <div style={containerDiv}>
        <h1 style={clientNameHeading}>{dados.cliente}</h1>
        <table>
          <thead>
            {dados.compras.map((_, index) => {
              let headColumn = ["Produto", "Preço"];

              return (
                <tr>
                  <th scope="col">{headColumn[headColumn.length]}</th>
                </tr>
              );
            })}
          </thead>
          <tbody>
            {/* {dados.compras.map((compra, index) => {
              return td;
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Exercicio;
