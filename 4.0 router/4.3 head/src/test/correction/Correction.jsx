import { Routes, Route, BrowserRouter } from "react-router-dom";

import Container from "../../components/Container";
import Header from "./utils/Header";
import Produtos from "./utils/Produtos";
import Produto from "./utils/Produto";
import Contato from "./utils/Contato";
import Footer from "./utils/Footer";

import "./Correction.css";

const Correction = () => {
  return (
    <>
      <Container className="App">
        <BrowserRouter>
          <Header />
          <Container className="content">
            <Routes>
              <Route path="/" element={<Produtos />} />
              <Route path="/produto/:id" element={<Produto />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </Container>
    </>
  );
};

export default Correction;
