import React from "react";
import Exercicio from "./exercicio";

const games = [
  { nome: "The Legend of Zelda: Breath of the Wild", nota: 97 },
  { nome: "Red Dead Redemption 2", nota: 97 },
  { nome: "The Witcher 3: Wild Hunt", nota: 93 },
  { nome: "God of War (2018)", nota: 94 },
  { nome: "Elden Ring", nota: 96 },
  { nome: "Grand Theft Auto V", nota: 97 },
  { nome: "Portal 2", nota: 95 },
  { nome: "Mass Effect 2", nota: 94 },
  { nome: "Dark Souls", nota: 89 },
  { nome: "Hades", nota: 93 },
];

const App = () => {
  return (
    <>
      {/* <ul>
        {games
          .filter(({ nota }) => nota >= 95)
          .map(({ nome, nota }) => (
            <li>
              <div>
                <p key={`title${nome}`}> Título: {nome}</p>
                <span key={`score${nota}`}>Nota: {nota}</span>
              </div>
            </li>
          ))}
      </ul> */}
      <Exercicio />
    </>
  );
};

export default App;
