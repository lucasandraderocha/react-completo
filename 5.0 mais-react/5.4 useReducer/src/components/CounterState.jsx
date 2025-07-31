import { useState } from "react";

import useCounter from "../hooks/useCounter";

import Button from "../../../5.2 lazy-suspense/src/components/Button";
import Container from "../../../5.2 lazy-suspense/src/components/Container";

const CounterReducer = () => {
  const [count, setCount] = useState(0);
  const { handleCount } = useCounter(setCount);
  return (
    <>
      <Container className="flex py-8 px-8 w-full brd-sm rds-sm justify-center aling-center">
        <p>{count.toFixed(2)}</p>
      </Container>
      <Container className="flex py-8 px-8 gap-8 w-full h-full brd-sm rds-sm align-center justify-center">
        <Button
          id="add"
          className="py-8 px-24 color-neutral-deep rds-sm pointer h-fit "
          onClick={handleCount}
        >
          +
        </Button>
        <Button
          id="sub"
          className="py-8 px-24 color-neutral-deep rds-sm pointer h-fit"
          onClick={handleCount}
        >
          -
        </Button>
        <Button
          id="divide"
          className="py-8 px-24 color-neutral-deep rds-sm pointer h-fit"
          onClick={handleCount}
        >
          /
        </Button>
        <Button
          id="square"
          className="py-8 px-24 color-neutral-deep rds-sm pointer h-fit"
          onClick={handleCount}
        >
          √
        </Button>
      </Container>
    </>
  );
};

export default CounterReducer;
