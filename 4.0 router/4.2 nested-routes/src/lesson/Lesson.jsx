import Container from "../components/Container";
import RouteApp from "./RouteApp";
const Lesson = () => {
  return (
    <>
      <Container className="w-full h-fit brd-sm rds-sm py-8 px-8 flex flex-column gap-8 align-center">
        <h1 className="cursor-def typo-xlg">Lesson Project ⇢ Mini Slide</h1>
      </Container>
      <Container className="w-full py-24 px-64">
        <RouteApp />
      </Container>
    </>
  );
};

export default Lesson;
