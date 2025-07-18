// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto

import { useContext } from "react";
import GlobalContext from "../utils/GlobalContext";

// e exponha essa função no contexto global
const ExerciseLesson = () => {
  const { productList, callProducts, setProductList } =
    useContext(GlobalContext);

  return (
    <>
      <h1>useContext Exercise</h1>
      <fieldset>
        <button onClick={callProducts}>Carregar Dados</button>
        <button onClick={() => setProductList([])}>Limpar Dados</button>
        <section>
          {productList.map(product => (
            <>
              <li key={`product-${product.id}`}>
                {product.id}: {product.nome}
              </li>
            </>
          ))}
        </section>
      </fieldset>
    </>
  );
};

export default ExerciseLesson;
