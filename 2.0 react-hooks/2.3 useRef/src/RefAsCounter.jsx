import React from "react";

const RefAsCounter = () => {
  const counterRef = React.useRef(0);

  const handleIncreaseRef = () => {
    counterRef.current = counterRef.current + 1;
  };

  const handleShowClick = () => {
    alert(`Foram clicados ${counterRef.current} vezes`);
  };

  return (
    <>
      <div>useRef como uma alternativa ao useState</div>
      <button onClick={handleIncreaseRef}>clicar</button>
      <button onClick={handleShowClick}>Mostrar Cliques</button>
    </>
  );
};

export default RefAsCounter;
