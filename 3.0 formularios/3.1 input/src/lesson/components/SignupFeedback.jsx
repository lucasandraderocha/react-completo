import { useContext } from "react";
import ExerciseContext from "../contexts/ExerciseContext";
import Button from "./Button";

const SignupFeedback = () => {
  const { status, setStatus } = useContext(ExerciseContext);

  const statusResponse = {
    200: "Seu cadastro foi concluído com sucesso!",
    403: "Ocorreu algum problema...",
    500: "Internal Server Error",
  };
  return (
    <div
      className="gap-8"
      style={{
        display: "grid",
        gridColumn: "2/ 4",
        alignSelf: "center",
        justifySelf: "stretch",
      }}
    >
      <div className="flex flex-column gap-4 justify-center align-center">
        <h1>⇢{status}⇠</h1>
        <p>{statusResponse[status]}</p>
      </div>
      <Button onClick={() => setStatus(null)}>↩ Voltar</Button>
    </div>
  );
};

export default SignupFeedback;
