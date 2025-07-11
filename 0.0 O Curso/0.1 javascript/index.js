// Tudo é objeto
const obj = {
  chave: "valor",
};

console.log(obj.chave);
// O console por consequência também é um objeto e o log é sua função como propriedade
// Logo, observamos que obj.chave é:
// obj -> Objeto
// chave -> Propriedade
// "valor" -> é o valor armazenado da propriedade

// Funções(function e arrow function)

// function
function sumFunc(fNum, sNum) {
  return fNum + sNum;
}

// arrow function
const sumArrowFunc = (fnum, snum) => fNum + sNum;

// function expression
const sumExpressFunc = function (fNum, sNum) {
  return fNum + sNum;
};

// Destructuring

// Em funções
const handleMove = e => {
  const { clientX, clientY } = e;
  console.log(clientX, clientY);
};

// document.addEventListener("mousemove", handleMove);

// Em arrays
const frutas = ["Banana", "Jaca"];
let [pfruta] = frutas;

console.log(pfruta);

const usePerimetro = [4, lado => usePerimetro[0] * lado];
let [lado, perimetro] = usePerimetro;

console.log(lado, perimetro(9));

// Spread Operator

const showList = (empresa, ...clientes) => {
  clientes.forEach(cliente =>
    console.log(`${cliente}, trabalha na ${empresa}.`)
  );
};

showList("Facebook", "Lucas", "Oliveira", "Levi", "Vanessa", "Ricardo");
