import { useContext } from "react";

import SignUpResponseExerciseLesson from "./components/SignupFeedback";
import FormContainerExercise from "./components/FormContainerExercise";
import Loading from "./components/Loading";

import ExerciseContext from "./contexts/ExerciseContext";

const Exercise = () => {
  const { loading, status } = useContext(ExerciseContext);

  return (
    <>
      {loading && (
        <Loading loadingState={loading} stepIcon={"||"}>
          <h1>Loading</h1>
        </Loading>
      )}
      {status && <SignUpResponseExerciseLesson />}
      {!loading && !status && <FormContainerExercise />}
    </>
  );
};

export default Exercise;
