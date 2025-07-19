import { useState } from "react";

import { GlobalStorage } from "./utils/GlobalStorage";

import Lesson from "./lesson/Lesson";
import Test from "./test/Test";

const App = () => {
  const [lesson, setLesson] = useState(false);
  const handleShowClick = () => {
    setLesson(!lesson);
  };
  return (
    <GlobalStorage>
      <>
        <fieldset>
          <h1>useContext</h1>
          <div>
            <button onClick={handleShowClick}>
              {lesson ? "Mostrar testes" : "Mostrar Aula"}
            </button>
          </div>
          <br />
          {!lesson && <Test />}
          {lesson && <Lesson />}
        </fieldset>
      </>
    </GlobalStorage>
  );
};

export default App;
