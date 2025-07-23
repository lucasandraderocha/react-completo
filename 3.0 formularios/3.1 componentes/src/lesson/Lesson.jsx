import Select from "./components/Select";
import ExerciseStorage from "./contexts/ExerciseStorage";
import Exercise from "./Exercise";

const Lesson = () => {
  return (
    <>
      <ExerciseStorage>
        {/* <Exercise /> */}
        <Select>Olá</Select>
      </ExerciseStorage>
    </>
  );
};

export default Lesson;
