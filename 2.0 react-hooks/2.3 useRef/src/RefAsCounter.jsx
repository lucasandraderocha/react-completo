import React from "react";

const RefAsCounter = () => {
  const [amount, setAmount] = React.useState(null);
  const counterRef = React.useRef(0);

  const handleCountClick = () => {
    counterRef.current++;
    console.log(`counterRef.current: ${counterRef.current}`);
  };

  const handleAlertClick = () => {
    alert(`Foram clicadas ${counterRef.current} vezes`);
  };

  const handleShowClick = () => {
    setAmount(counterRef.current);
  };
  return (
    <>
      <div>
        <p>useRef como uma alternativa ao useState</p>
        <button onClick={handleCountClick}>Clicar</button>
        <button onClick={handleAlertClick}>Alert de Cliques</button>
        <button onClick={handleShowClick}>Mostrar Cliques [UI]</button>
        {amount && <p>{amount} Cliques</p>}
      </div>
    </>
  );
};

export default RefAsCounter;
