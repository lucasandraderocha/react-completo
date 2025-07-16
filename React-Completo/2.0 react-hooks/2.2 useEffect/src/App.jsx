import { useEffect, useState } from "react";
import LessonEffect from "./LessonEffect";
import ExerciseEffect from "./ExerciseEffect";
function App() {
  const [view, setView] = useState(null);
  const handleExerciseRef = () => {
    setView(!view);
  };
  useEffect(() => {
    setView(true);
  }, []);

  return (
    <>
      <div>
        {view && <ExerciseEffect />}
        <br />
        <button onClick={handleExerciseRef}>
          {view ? "Mostrar Exercicio" : "Fechar"}
        </button>
      </div>
      <br />
      <div>
        <LessonEffect />
      </div>
    </>
  );
}

export default App;
