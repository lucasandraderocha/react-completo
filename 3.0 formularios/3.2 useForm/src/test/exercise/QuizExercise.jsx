import { useEffect, useState } from "react";
import Button from "../../lesson/components/button/Button";
import QuestionQuiz from "./QuestionQuiz";

import quiz from "../utils/quiz";
import Container from "../components/Container";

const FormExercise = () => {
  const [questions, setQuestions] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    setQuestions([...quiz]);
  }, []);

  const handleAnswers = ({ target }) => {
    if (questions[indexQuestion].correctAnswer.includes(target.id)) {
      setAnswers(target.value);
      console.log("Acertow");
    } else {
      let e = new Error("Erroooww");
      console.log(e);
    }
  };
  return (
    <>
      <Container className="py-24 px-24">
        <QuestionQuiz
          question={questions[indexQuestion]}
          setShot={handleAnswers}
          shot={answers}
        />
      </Container>
      <Container className="flex flex-row gap-8 w-full">
        {indexQuestion > 0 ? (
          <Button
            className="py-16 w-full rds-sm color-primary pointer typo-main typo-lg"
            onClick={() => setIndexQuestion(indexQuestion - 1)}
          >
            ⇠ Voltar
          </Button>
        ) : (
          ""
        )}
        {indexQuestion < questions.length ? (
          <Button
            className="py-16 w-full rds-sm color-primary pointer typo-main typo-lg"
            onClick={() => setIndexQuestion(indexQuestion + 1)}
          >
            Avançar ⇢
          </Button>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default FormExercise;
