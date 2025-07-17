import { useState } from "react";

import Lesson from "./lesson/Lesson";
import Test from "./test/Test";

function App() {
  const [lesson, setLesson] = useState(false);
  const handleShowClick = () => {
    setLesson(!lesson);
  };
  return (
    <>
      <div>
        <button onClick={handleShowClick}>
          {lesson ? "Mostrar testes" : "Mostrar Aula"}
        </button>
      </div>
      <br />
      {!lesson && <Test />}
      {lesson && <Lesson />}
    </>
  );
}

export default App;
