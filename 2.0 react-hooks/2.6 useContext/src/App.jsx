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
    <>
      <fieldset className="typo-main py-24 px-24">
        <h1>useContext</h1>
        <div>
          <button
            className="px-12 py-8 color-neutral-deep rds-sm typo-main pointer"
            onClick={handleShowClick}
          >
            {lesson ? "Mostrar testes" : "Mostrar Aula"}
          </button>
        </div>
        <br />
        {!lesson && <Test />}
        {lesson && <Lesson />}
      </fieldset>
    </>
  );
};

export default App;
