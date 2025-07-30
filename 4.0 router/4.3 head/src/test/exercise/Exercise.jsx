// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "../../components/Container";
import Home from "./routes/Home";
import Header from "./Header";
import Contact from "./routes/Contact";
import Product from "./routes/Product";

const Exercise = () => {
  return (
    <>
      <BrowserRouter>
        <Container className="flex flex-column gap-32">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contato" element={<Contact />} />
            <Route path="produto/:id" element={<Product />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default Exercise;
