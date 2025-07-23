import ExerciseStorage from "./contexts/ExerciseStorage";
import Exercise from "./Exercise";

const Lesson = () => {
  return (
    <>
      <ExerciseStorage>
        <Exercise />
      </ExerciseStorage>
    </>
  );
};

export default Lesson;
