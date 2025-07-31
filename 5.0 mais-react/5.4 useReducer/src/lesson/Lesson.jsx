import { lazy } from "react";
import Container from "../components/Container";
const Contato = lazy(() => import("../components/Contato"));

const Lesson = () => {
  return (
    <>
      <Container className="w-full h-fit brd-sm rds-sm py-8 px-8 flex flex-column gap-8 align-center">
        <h1 className="cursor-def typo-xlg">Lesson</h1>
      </Container>
      <Container className="w-full py-24 px-64">
        <Contato />
      </Container>
    </>
  );
};

export default Lesson;
