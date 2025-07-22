import { useState } from "react";
import Lesson from "./lesson/Lesson";
import Test from "./test/Test";

function App() {
  const [lesson, setLesson] = useState(true);

  return (
    <>
      <main className="py-16 px-16 typo-main flex flex-column gap-8">
        <section className="brd-sm rds-sm py-8 px-8 flex flex-column gap-8 align-center">
          <h1>Input</h1>
          <button
            onClick={() => setLesson(!lesson)}
            className="px-32 py-16 rds-md typo-main color-neutral-deep pointer w-fit"
          >
            {lesson ? "Mostrar Teste" : "Mostrar Aula"}
          </button>
        </section>
        <section
          className="brd-sm rds-sm py-16 px-16"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
          {lesson ? <Lesson /> : <Test />}
        </section>
      </main>
    </>
  );
}

export default App;
