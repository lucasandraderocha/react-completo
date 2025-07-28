import Container from "../lesson/components/container/Container";
import Quiz from "./exercise/Quiz";

const Test = () => {
  return (
    <>
      <Container className="w-full flex flex-column py-8 px-8 align-center brd-sm rds-sm ">
        <h1 className="typo-main typo-xlg">Test ⇢ Exercise Quiz</h1>
      </Container>
      <Container className="w-full">
        <Quiz />
      </Container>
    </>
  );
};

export default Test;
