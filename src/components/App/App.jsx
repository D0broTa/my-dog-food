import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../utils/api'

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../Pages/HomePage";
import CatalogPage from "../Pages/CatalogPage";
import ProductPage from "../Pages/ProductPage";
import FAQ from "../Pages/FAQ"
import NotFound from "../Pages/NotFound"




function App() {

  useEffect(() => {
    api.getAllProducts().then((data) => console.log(data))
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product_id" element={<ProductPage />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
