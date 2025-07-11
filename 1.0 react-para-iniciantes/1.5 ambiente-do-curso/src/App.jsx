import React from "react";
import Exercicio from "./exercicio";

const hello = "World";

const foo = bar => {
  console.log(bar);
};

const bigodera = {
  fontSize: "4rem",
  fontFamily: "Helvetica",
  color: "red",
};

const App = () => {
  return (
    <>
      {/* <h1>Hello {hello}</h1>
      <h2 style={bigodera} onClick={() => foo("bar")}>
        (▀̿Ĺ̯▀̿ ̿)
      </h2> */}
      <Exercicio />
    </>
  );
};

export default App;
