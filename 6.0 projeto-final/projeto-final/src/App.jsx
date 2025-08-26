import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserStorage from "./UserStorage";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import User from "./User/User";
import Login from "./components/login/Login";
import NotFound from "./NotFound";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="account/*" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
