import { useState } from "react";
import Radio from "../components/Radio";
import Container from "../../lesson/components/container/Container";
const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const Quiz = () => {
  const [answer, setAnswer] = useState(
    perguntas.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, 0)
  );
  const [slide, setSlide] = useState(0);
  const [point, setPoint] = useState(null);
  const handleChange = ({ target }) => {
    setAnswer({ ...answer, [target.id]: target.value });
    console.log(target);
  };

  const result = () => {
    const correct = perguntas.filter(
      ({ id, resposta }) => resposta === answer[id]
    );
    setPoint(`Você acertou ${correct.length} de ${perguntas.length}`);
  };

  const handleClick = () => {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      result();
    }
  };
  return (
    <>
      <Container className="flex flex-column w-full justify-center align-center">
        <form
          onSubmit={e => e.preventDefault()}
          className="flex flex-column gap-8"
        >
          {!point &&
            perguntas.map((pergunta, index) => (
              <Radio
                key={pergunta.id}
                active={slide === index}
                {...pergunta}
                value={answer[pergunta.id]}
                onChange={handleChange}
              />
            ))}
          {point ? (
            <Container className="flex py-16 px-12 w-fit brd-sm rds-sm typo-lg">
              <p>{point}</p>
            </Container>
          ) : (
            <button
              onClick={handleClick}
              className="py-16 px-32 color-neutral-deep rds-sm w-full"
            >
              Próxima
            </button>
          )}
        </form>
      </Container>
    </>
  );
};

export default Quiz;
