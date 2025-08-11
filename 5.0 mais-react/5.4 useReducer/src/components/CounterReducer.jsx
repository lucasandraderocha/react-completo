import { useReducer, useState } from "react";

import Button from "../../../5.2 lazy-suspense/src/components/Button";
import Container from "../../../5.2 lazy-suspense/src/components/Container";

const initial = {
  count: 0,
};

const actions = {
  increment: "increment",
  decrement: "decrement",
  multiply: "multiply",
  divide: "divide",
  square: "square",
  custom: "custom",
};

const reducer = (state, action) => {
  const { increment, decrement, multiply, divide, square, custom } = actions;

  switch (action.type) {
    case increment:
      return { count: state.count + 1 };
    case decrement:
      return { count: state.count - 1 };
    case multiply:
      return { count: state.count * 2 };
    case divide:
      return { count: state.count / 2 };
    case square:
      return { count: state.count / state.count };
    case custom:
      return { count: action.payload };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  const [customValue, setCustomValue] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(customValue);
    dispatch({ type: actions.custom, payload: customValue });
  };

  return (
    <>
      <Container className="flex flex-column gap-8">
        <Container className="flex py-8 px-24 brd-sm rds-sm justify-center align-center">
          <p>{state.count}</p>
        </Container>
        <Container className="flex flex-1 py-8 px-8 gap-8 w-full brd-sm rds-sm justify-center">
          <Button
            onClick={() => dispatch({ type: actions.divide })}
            className="py-8 px-24 color-neutral-deep rds-sm pointer"
          >
            /
          </Button>
          <Button
            onClick={() => dispatch({ type: actions.decrement })}
            className="py-8 px-24 color-neutral-deep rds-sm pointer"
          >
            -
          </Button>
          <Button
            onClick={() => dispatch({ type: actions.increment })}
            className="py-8 px-24 color-neutral-deep rds-sm pointer"
          >
            +
          </Button>
          <Button
            onClick={() => dispatch({ type: actions.multiply })}
            className="py-8 px-24 color-neutral-deep rds-sm pointer"
          >
            ×
          </Button>
          <Button
            onClick={() => dispatch({ type: actions.multiply })}
            className="py-8 px-24 color-neutral-deep rds-sm pointer"
          >
            √
          </Button>
        </Container>
        <Container className="flex flex-column flex-1 py-8 px-8 gap-8 w-full brd-sm rds-sm justify-center">
          <form onSubmit={handleSubmit} className="flex flex-column gap-8">
            <label className="flex flex-column gap-4 pointer">
              Valor customizado
              <input
                type="number"
                value={customValue}
                onChange={e => setCustomValue(e.target.value)}
                placeholder="insira um valor customizado"
                className="py-8 px-12 brd-sm rds-sm w-full typo-main"
              />
            </label>
            <Button
              type="submit"
              className="py-8 px-24 color-neutral-deep rds-sm pointer"
            >
              Customizar Valor
            </Button>
          </form>
        </Container>
      </Container>
    </>
  );
};

export default CounterReducer;
