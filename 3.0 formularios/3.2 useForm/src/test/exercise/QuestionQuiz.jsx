import Container from "../components/Container";
import Label from "../components/Label";

const QuestionQuiz = ({ question, shot, setShot }) => {
  return (
    <>
      <Container className="flex flex-column gap-16 align-center">
        <Container className="py-8 px-8 flex justify-center align-center gap-8">
          <h1 className="text-center">
            {question?.id.slice(2)}. {question?.text}
          </h1>
        </Container>
        <ul className="flex flex-column gap-8 w-full">
          {question?.options.map(option => (
            <li className="pointer" key={option.id}>
              <Container className="py-8 px-8 brd-sm rds-sm">
                <Label key={option.id} className="flex flex-row gap-8">
                  <input
                    style={{ accentColor: "var(--primary)" }}
                    type="radio"
                    id={option.id}
                    value={option.answer}
                    checked={shot === option.answer}
                    onChange={setShot}
                    className="pointer"
                  />
                  <Container className="w-full flex justify-between">
                    <p>{option.answer}</p>
                    <p style={{ color: "var(--neutral-tint)" }}>{option.id}</p>
                  </Container>
                </Label>
              </Container>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default QuestionQuiz;
