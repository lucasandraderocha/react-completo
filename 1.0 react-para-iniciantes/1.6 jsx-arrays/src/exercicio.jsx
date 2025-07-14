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
  const clientHeading = {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  };

  const containerDiv = {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  };
  const dados = mario;

  let isActive = dados.ativa === true ? "green" : "red";

  const todasCompras = dados.compras.map(compra => {
    let valor = Number(compra.preco.replace("R$ ", ""));
    return valor;
  });
  let total = todasCompras.reduce((acm, valorAtual) => {
    return acm + valorAtual;
  });
  return (
    <>
      <div style={containerDiv}>
        <h1 style={clientHeading}>Nome: {dados.cliente}</h1>
        <h3 style={clientHeading}>Idade: {dados.idade}</h3>
        <p style={{ color: isActive }}>
          Situação: {dados.ativa === true ? "ativa" : "inativa"}
        </p>
        <div>
          <p>Total em Compras:</p>
          <span>R$ {total}</span>
          {total > 10000 && <p>"Seu gasto está muito alto"</p>}
        </div>
      </div>
    </>
  );
};

export default Exercicio;
