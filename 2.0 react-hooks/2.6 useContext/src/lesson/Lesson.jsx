import { GlobalStorage } from "../utils/GlobalStorage";
import ExerciseLesson from "./ExerciseLesson";

const Lesson = () => {
  return (
    <GlobalStorage>
      <>
        <section>
          <h1>Lesson</h1>
        </section>
        <ExerciseLesson />
      </>
    </GlobalStorage>
  );
};

export default Lesson;
