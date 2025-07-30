import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";
import NotFound from "./NotFound";
import Header from "./Header";
import Login from "./Login";
import Produto from "./Produto";

import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAnalise from "./ProdutoAnalise";
import ProdutoCustomizado from "./ProdutoCustomizado";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-column gap-16">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contato" element={<Contato />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="login" element={<Login />} />
          <Route path="produto/:id" element={<Produto />}>
            <Route path="" element={<ProdutoDescricao />} />
            <Route path="analises" element={<ProdutoAnalise />} />
            <Route path="customizado" element={<ProdutoCustomizado />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouteApp;
