import { useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  const handleCounterClick = () => {
    setCount(count + 1);
    console.log("Atualizando 😥");
  };
  return (
    <>
      <div>
        <p>useEffect</p>
        <button onClick={handleCounterClick}>{count}</button>
      </div>
    </>
  );
};

export default CounterEffect;
