import React from "react";
import Exercicio from "./Exercicio";
import Correcao from "./Correcao";
const react = React;

const Product = () => {
  react.useEffect(() => {
    const handleScroll = e => {
      console.log(e);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div style={{ height: "110vh" }}>
        <h1>My Product</h1>
      </div>
    </>
  );
};
function App() {
  const containerStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "1rem",
    borderRadius: ".5rem",
  };
  // const [active, setActive] = react.useState(false);
  return (
    <>
      {/* {active && <Product />}
      <button onClick={() => setActive(!active)}>
        {!active ? "Ativar" : "Desativar"}
      </button> */}
      {/* <div style={containerStyle}>
        <Exercicio />
      </div> */}
      <div style={containerStyle}>
        <Correcao />
      </div>
    </>
  );
}

export default App;
