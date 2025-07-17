import React, { useCallback, useState } from "react";
import ButtonIncrementTestCallback from "./ButtonIncrementTestCallback";
import ContainerIncrementTestCallback from "./ContainerIncrementTestCallback";

const Test = () => {
  const [count, setCount] = useState(0);

  const handleIncrementClick = useCallback(() => {
    console.log(`Test -> ButtonIncrementTestCallback -> ${performance.now()}`);
  }, []);

  return (
    <>
      <header>
        <p>Test</p>
      </header>
      <section>
        <ContainerIncrementTestCallback forwardedValue={count} />
      </section>
      <section>
        <button onClick={() => setCount(count + 1)}>Incrementar Pai</button>
      </section>
      <section>
        <ButtonIncrementTestCallback
          forwardedIncrement={handleIncrementClick}
        />
      </section>
    </>
  );
};

export default Test;
