import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/NavBar";
import Product from "./pages/Product";
import Infos from "./pages/Infos";
import NoMatchRoute from "./pages/NoMatchRoute";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/infos" element={<Infos />} />
          <Route path="*" element={<NoMatchRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
