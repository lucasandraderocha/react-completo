import { useContext } from "react";
import ExerciseContext from "../contexts/ExerciseContext";
import Button from "./Button";
import useSubmitHandler from "../hooks/useSubmitHandler";

const SignUpResponseExerciseLesson = () => {
  const { status, setStatus } = useContext(ExerciseContext);
  const { error, loading } = useSubmitHandler();
  return (
    <>
      {!loading && !error && status && (
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
            <h1>{status}</h1>
            <p>
              {status === 200
                ? "Seu cadastro foi concluído com sucesso!"
                : "Ocorreu algum problema"}
            </p>
          </div>
          <Button onClick={() => setStatus(null)}>↩ Voltar</Button>
        </div>
      )}
    </>
  );
};

export default SignUpResponseExerciseLesson;
