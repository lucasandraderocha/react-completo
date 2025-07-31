import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const Contact = lazy(() => import("./routes/Contact"));
const NotFound = lazy(() => import("./routes/NotFound"));

// import About from "./routes/About";
// import Contact from "./routes/Contact";
// import NotFound from "./routes/NotFound";
import Header from "./Header";
import Container from "../../components/Container";
import Loading from "./components/Loading";

const LazyTest = () => {
  return (
    <>
      <Suspense
        fallback={
          <Loading stepIcon={"∷"}>
            <h1>Loading</h1>
          </Loading>
        }
      >
        <BrowserRouter>
          <Container className="flex flex-column gap-8">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default LazyTest;
