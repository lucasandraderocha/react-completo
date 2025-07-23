import Input from "./components/Input";
import Option from "./components/Option";
import Select from "./components/Select";
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
