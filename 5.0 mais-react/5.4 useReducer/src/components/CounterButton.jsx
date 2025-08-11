import Button from "../../../5.2 lazy-suspense/src/components/Button";
import Container from "../../../5.2 lazy-suspense/src/components/Container";
import CounterReducer from "./CounterReducer";
import CounterState from "./CounterState";

const CounterButton = () => {
  return (
    <>
      <Container className="flex gap-8">
        <Container className="flex flex-column gap-8 flex-1">
          <Container className="flex  py-8 px-8 w-full brd-sm rds-sm justify-center aling-center">
            <p>Versão com useState</p>
          </Container>
          <CounterState />
        </Container>
        <Container className="flex flex-column gap-8 flex-1">
          <Container className="flex py-8 px-8 w-full brd-sm rds-sm justify-center aling-center">
            <p>Versão com useReducer</p>
          </Container>
          <CounterReducer />
        </Container>
      </Container>
    </>
  );
};

export default CounterButton;
