import { useState } from "react";
import Lesson from "./lesson/Lesson";
import Test from "./test/Test";

function App() {
  const [lesson, setLesson] = useState(false);

  return (
    <>
      <main className="flex flex-column py-16 px-16 gap-8 typo-main">
        <section>
          <h1 style={{ fontWeight: "normal", fontSize: "2rem" }}>
            Custom Hooks
          </h1>
        </section>
        <section>
          <button
            onClick={() => setLesson(!lesson)}
            className="py-24 px-32 rds-md color-neutral-deep"
          >
            {lesson ? "Mostrar Testes" : "Mostrar Aulas"}
          </button>
        </section>
        <br />
        <section>{lesson ? <Test /> : <Lesson />}</section>
      </main>
    </>
  );
}

export default App;
