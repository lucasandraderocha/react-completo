import React from "react";
import Home from "./Components/Home";
import Products from "./Components/Products";
const App = () => {
  let { pathname } = window.location;

  return <>{pathname === "/product" ? <Products /> : <Home />}</>;
};

export default App;
