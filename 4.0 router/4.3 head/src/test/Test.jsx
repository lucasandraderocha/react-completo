import Container from "../components/Container";
import Correction from "./correction/Correction";
import Exercise from "./exercise/Exercise";

const Test = () => {
  return (
    <>
      <Container className="w-full flex flex-column py-8 px-8 align-center brd-sm rds-sm ">
        <h1 className="cursor-def typo-xlg">Test ⇢ Desafio Router 1</h1>
      </Container>
      <Container className="w-full">
        <Correction />
      </Container>
    </>
  );
};

export default Test;
