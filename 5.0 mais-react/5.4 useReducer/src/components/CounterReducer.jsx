import { useReducer } from "react";

import Button from "../../../5.2 lazy-suspense/src/components/Button";
import Container from "../../../5.2 lazy-suspense/src/components/Container";

const initial = {
  counter: 0,
  role: {
    level: 0,
    degree: ["common", "admin", "super"],
  },
};

const reducer = (state, action) => {
  const operations = {
    add: () => ({ ...state, counter: state.counter + 1 }),

    subtract: () => ({ ...state, counter: state.counter - 1 }),

    multiply: () => ({ ...state, counter: state.counter * 1 }),

    divide: () => ({ ...state, counter: state.counter / 2 }),

    square: () => ({ ...state, counter: state.counter * state.counter }),

    degreeUp: () => ({
      ...state,
      role: { ...state.role, level: state.role.level + 1 },
    }),
  };

  const operation = operations[action.type];
  if (operation) {
    return operation();
  }
  return state;
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <>
      <Container className="flex gap-8">
        <Container className="flex w-fit py-8 px-24 brd-sm rds-sm justify-center align-center">
          <p>{state.counter}</p>
        </Container>
        <Container className="flex flex-1 py-8 px-8 gap-8 w-full brd-sm rds-sm justify-center">
          <Button
            className="py-8 px-24 color-neutral-deep rds-sm pointer"
            onClick={() => dispatch({ type: "subtract" })}
          >
            ⇣
          </Button>
          <Button
            className="py-8 px-24 color-neutral-deep rds-sm pointer"
            onClick={() => dispatch({ type: "add" })}
          >
            ⇡
          </Button>
        </Container>
      </Container>
      <Container className="flex flex-column py-8 px-8 gap-8 w-full brd-sm rds-sm align-center justify-center">
        <p>{state.role.degree[state.role.level]}</p>
        <Button
          onClick={() => dispatch({ type: "degreeUp" })}
          className="py-8 px-24 w-fit color-neutral-deep rds-sm pointer"
        >
          Level up ⇡⇡
        </Button>
      </Container>
    </>
  );
};

export default CounterReducer;
