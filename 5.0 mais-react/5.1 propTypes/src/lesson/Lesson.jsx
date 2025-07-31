import Button from "../components/Button";
import Container from "../components/Container";

const Lesson = () => {
  return (
    <>
      <Container className="w-full h-fit brd-sm rds-sm py-8 px-8 flex flex-column gap-8 align-center">
        <h1 className="cursor-def typo-xlg">Lesson ⇢ PropTypes</h1>
      </Container>
      <Container className="w-full py-24 px-64">
        <Button width={100} disabled={false} radius={8}>
          Clique Aqui
        </Button>
      </Container>
    </>
  );
};

export default Lesson;
