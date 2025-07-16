import { useState } from "react";
import ProductEffect from "./ProductEffect";
const LessonEffect = () => {
  const [show, setShow] = useState(null);
  return (
    <>
      {show && <ProductEffect />}
      <button onClick={() => setShow(!show)}>
        {!show ? "Mostrar Aula" : "Fechar"}
      </button>
    </>
  );
};

export default LessonEffect;
