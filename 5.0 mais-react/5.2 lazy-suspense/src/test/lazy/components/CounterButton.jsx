import { useState } from "react";

import useCount from "../hooks/useCount";

import Button from "../../../components/Button";
import Container from "../../../components/Container";

const CounterButton = () => {
  const [count, setCount] = useState(0);
  const { handleClick } = useCount(setCount);

  return (
    <>
      <Container className="flex gap-8 align-center">
        <Button
          id="diminuir"
          className="py-8 px-16 h-fit rds-sm pointer color-primary"
          onClick={handleClick}
        >
          ⇣
        </Button>
        <Container className="py-16 px-16 rds-sm brd-sm animeLeft">
          {count}
        </Container>
        <Button
          id="adicionar"
          className="py-8 px-16 h-fit rds-sm pointer color-primary"
          onClick={handleClick}
        >
          ⇡
        </Button>
      </Container>
    </>
  );
};

export default CounterButton;
