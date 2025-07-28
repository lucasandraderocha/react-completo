import Container from "./components/container/Container";
import Slide from "./Slide";
const Lesson = () => {
  const slides = [
    { id: "slide1", text: "Slide 1" },
    { id: "slide2", text: "Slide 2" },
    { id: "slide3", text: "Slide 3" },
    { id: "slide4", text: "Slide 4" },
  ];

  return (
    <>
      <Container className="w-full h-fit brd-sm rds-sm py-8 px-8 flex flex-column gap-8 align-center">
        <h1 className="cursor-def typo-xlg">Lesson Project ⇢ Mini Slide</h1>
      </Container>
      <Container className="w-full py-24 px-64">
        <Slide slides={slides} />
      </Container>
    </>
  );
};

export default Lesson;
