import { useEffect, useState } from "react";
import ExerciseProduct from "./ExerciseProduct";

const ExerciseEffect = () => {
  const [product, setProduct] = useState(null);
  const handleExerciseClick = async e => {
    let data = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText.toLocaleLowerCase()}`
    ).then(res => res.json());
    setProduct(data);
    window.localStorage.setItem("product", data.id);
  };
  useEffect(() => {
    const savedProduct = window.localStorage.getItem("product");
    if (savedProduct) {
      const handleLocalStorage = async () => {
        let data = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${savedProduct}`
        ).then(res => res.json());
        setProduct(data);
      };
      handleLocalStorage();
    }
  }, []);
  return (
    <>
      <header>
        <h1>Preferência: {(product && product.id) || "Nenhuma"}</h1>
      </header>
      <section>
        <button onClick={handleExerciseClick}>Notebook</button>
        <button onClick={handleExerciseClick}>Smartphone</button>

        {product && <ExerciseProduct forwardedData={product} />}
      </section>
    </>
  );
};

export default ExerciseEffect;
