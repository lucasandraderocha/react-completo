// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

import SignUpResponseExerciseLesson from "./components/SignUpResponseExerciseLesson";
import ExerciseStorage from "./contexts/ExerciseStorage";
import FormContainerExercise from "./components/FormContainerExercise";
import Loading from "./components/Loading";

const Exercise = () => {
  return (
    <ExerciseStorage>
      <SignUpResponseExerciseLesson />
      <Loading />
      <FormContainerExercise />
    </ExerciseStorage>
  );
};

export default Exercise;
