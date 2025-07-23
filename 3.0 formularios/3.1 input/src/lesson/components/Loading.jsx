import { useEffect, useState } from "react";
import useSubmitHandler from "../hooks/useSubmitHandler";

const Loading = () => {
  const { loading } = useSubmitHandler();
  const [dots, setDots] = useState("∷");

  useEffect(() => {
    if (!loading) return;
    let intervalAnimation = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "∷" : prev + "∷"));
    }, 1000);
    return () => clearInterval(intervalAnimation);
  }, [loading]);
  return (
    <>
      {loading && (
        <div className="flex flex-column align-center">
          <h1>Carregando</h1>
          <p>{dots}</p>
        </div>
      )}
    </>
  );
};

export default Loading;
