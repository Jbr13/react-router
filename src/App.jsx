import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./component/NavBar";
import Product from "./pages/Product";
import Infos from "./pages/Infos";
import NoMatchRoute from "./pages/NoMatchRoute";
import SearchForm from "./component/SearchForm";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/infos" element={<Infos />} />
          <Route path="/search" element={<Search />} />
          <Route path="/company" element={<Navigate to="/about" />} />
          <Route path="*" element={<NoMatchRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
