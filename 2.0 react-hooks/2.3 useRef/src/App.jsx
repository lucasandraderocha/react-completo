import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State", count);
    console.log("Ref", countRef.current);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default App;
