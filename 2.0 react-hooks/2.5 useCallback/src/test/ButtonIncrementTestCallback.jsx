import { memo } from "react";

const ButtonIncrementTestCallback = memo(({ forwardedIncrement }) => {
  console.log(`ButtonIncrementTestCallback ->`, performance.now());

  return (
    <>
      <button onClick={forwardedIncrement}>Incrementar Filho</button>
    </>
  );
});

export default ButtonIncrementTestCallback;
