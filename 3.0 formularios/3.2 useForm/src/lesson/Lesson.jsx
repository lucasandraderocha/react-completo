import Container from "./components/container/Container";
import Form from "./Form";

const Lesson = () => {
  return (
    <>
      <Container className="w-full h-fit brd-sm rds-sm py-8 px-8 flex flex-column gap-8 align-center">
        <h1 className="cursor-def">Lesson Project ⇢ useForm hook</h1>
      </Container>
      <Container className="w-full py-24 px-64">
        <Form />
      </Container>
    </>
  );
};

export default Lesson;
